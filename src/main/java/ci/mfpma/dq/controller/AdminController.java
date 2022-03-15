package ci.mfpma.dq.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.RoleService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.utilitaires.SendEmailUtil;

@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	UtilisateurService utilisateurService;
	
	@Autowired
	DirectionService directionService;
	
	@Autowired
	RoleService roleService;
	
	@Autowired
	SendEmailUtil sendEmailUtil;
	
	@GetMapping("/accueilAdmin")
	public String getAccueilAdmin() {
		return "admin/accueil";
	}
	
	@GetMapping("/listeUtilisateur")
	public String getListeUtilisateur(Model model) {
		model.addAttribute("utilisateurs", utilisateurService.getAll());
		return "admin/listeUtilisateur";
	}
	
	@GetMapping("/nouvelUtilisateur")
	public String getNouvelUtilisateur(Model model) {
		model.addAttribute("directions", directionService.getAllDirectionsAsc());
		model.addAttribute("utilisateur", new Utilisateur());
		model.addAttribute("roles", roleService.findAllByOrderByNomRoleAsc());
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
			model.addAttribute("directions", directionService.getAllDirectionsAsc());
			model.addAttribute("roles", roleService.findAllByOrderByNomRoleAsc());
			model.addAttribute("erreurs", erreurs);
			return "admin/nouvelUtilisateur";
		}
		///utilisateurService.saveUtilisateur(utilisateur);
		try {
			sendEmailUtil.sendMessage(utilisateur);
		} catch (UnsupportedEncodingException | MessagingException e) {
			e.printStackTrace();
		}
		return "redirect:/admin/listeUtilisateur";
	}

}
