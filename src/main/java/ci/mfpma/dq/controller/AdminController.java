package ci.mfpma.dq.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.UtilisateurService;

@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	UtilisateurService utilisateurService;
	
	@Autowired
	DirectionService directionService;
	
	@GetMapping("/accueil")
	public String getAccueilAdmin() {
		return "admin/accueil";
	}
	
	@GetMapping("/listeUtilisateur")
	public String getListeUtilisateur(Model model) {
		model.addAttribute("utilisateurs", utilisateurService.findListUserByRole(4L));
		return "admin/listeUtilisateur";
	}
	
	@GetMapping("/nouvelUtilisateur")
	public String getNouvelUtilisateur(Model model) {
		model.addAttribute("directions", directionService.getAllDirectionsAsc());
		model.addAttribute("utilisateur", new Utilisateur());
		return "admin/nouvelUtilisateur";
	}
	
	@PostMapping("/creerUtilisateur")
	public String creerUtilisateurProcess(Utilisateur utilisateur, Model model) {
		List<String> erreurs = new ArrayList<>();
		if(utilisateurService.isEmailExist(utilisateur.getEmail())) {
			erreurs.add("Cette adresse email existe déjà");
		}			
		if(utilisateurService.isTelelphoneExist(utilisateur.getTelephone())) {
			erreurs.add("Ce numéro de téléphone existe déjà");
		}
		if(!erreurs.isEmpty()) {
			return "admin/nouvelUtilisateur";
		}
		utilisateurService.saveUtilisateur(utilisateur);
		return "redirect:/admin/listeUtilisateur";
	}

}
