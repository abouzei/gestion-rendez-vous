package ci.mfpma.dq.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.mail.SendEmailModifDemande;
import ci.mfpma.dq.mail.SendEmailUtil;
import ci.mfpma.dq.security.UtilisateurDetails;
import ci.mfpma.dq.service.DemandeService;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;
import ci.mfpma.dq.service.RoleService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.service.VilleService;

@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private UtilisateurService utilisateurService;
	
	@Autowired
	private DirectionService directionService;
	
	@Autowired
	private ProfessionService professionService;
	
	@Autowired
	private VilleService villeService;
	
	@Autowired
	private DemandeService demandeService;
	
	@Autowired
	private RoleService roleService;
	
	@Autowired
	private SendEmailUtil sendEmailUtil;
	
	@Autowired
	private SendEmailModifDemande sendEmailModifDemande;
	
	@GetMapping("/accueilAdmin")
	public String getAccueilAdmin() {
		return "admin/accueil";
	}
	
	@GetMapping("/listeUtilisateur")
	public String getListeUtilisateur(Model model) {
		model.addAttribute("utilisateurs", utilisateurService.findListUserNotUsc());
		return "admin/listeUtilisateur";
	}
	
	@GetMapping("/listeUsagerClient")
	public String getListeUsc(Model model) {
		model.addAttribute("utilisateurs", utilisateurService.findListUserByRole(1L));
		return "admin/listeUsagerClient";
	}
	
	
	@GetMapping("/listeDemande")
	public String getListeDemande(Model model, @AuthenticationPrincipal UtilisateurDetails util) {
		if(util.hasRole("ADMIN") || util.hasRole("CRUC")) {
			model.addAttribute("demandes", demandeService.getAll());
		}else {
			model.addAttribute("demandes", demandeService.listeDemandeByDirectionDesc(util.getDirection().getId()));
		}
		return "admin/listeDemande";
	}
	
	@GetMapping("/calendrierDemande")
	public String getDemandeCalendrier(Model model) {
		return "admin/calendrierDemande";
	}
	
	@GetMapping("/infosDemande/{demandeId}")
	public String getDetailsDemandeUsagerClient(@PathVariable("demandeId") Long demandeId, Model model) {
		model.addAttribute("directions", directionService.getAllDirections());
		model.addAttribute("statuts", demandeService.statutCRUC());
		Demande demande = demandeService.getById(demandeId);
		model.addAttribute("demande", demande);
		return"admin/infosDemande";
	}
	
	
	@GetMapping("/nouvelUtilisateur")
	public String getNouvelUtilisateur(Model model) {
		model.addAttribute("directions", directionService.getAllDirectionsAsc());
		model.addAttribute("utilisateur", new Utilisateur());
		model.addAttribute("roles", roleService.findAllByOrderByNomRoleAsc());
		return "admin/nouvelUtilisateur";
	}
	
	
	@GetMapping("/modifierUtilisateur/{id}") 
	public String getModifierUtilisateur(Model model, @PathVariable(name = "id") Long id) {
		model.addAttribute("professions", professionService.findAllByOrderByLibelleProfessionAsc());
		model.addAttribute("directions", directionService.getAllDirectionsAsc());
		model.addAttribute("villes", villeService.getAllVilles());
		model.addAttribute("utilisateur", utilisateurService.getById(id));
		return "admin/modifierUtilisateur"; 
	}
	
	@PostMapping("/modifierUtilisateur")
	public String modifierMonCompteProcess(Utilisateur utilisateur, Model model) {
		List<String> erreurs = new ArrayList<>();
		Utilisateur util = utilisateurService.getById(utilisateur.getId());
		if(utilisateurService.isEmailExist(utilisateur.getEmail()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Cette adresse email existe déjà");
		}		
		if(utilisateurService.isNumPieceExist(utilisateur.getNumPieceIdentite()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Ce numéro de pièce existe déjà");
		}
		if(utilisateurService.isTelelphoneExist(utilisateur.getTelephone()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Ce numéro de téléphone existe déjà");
		}
		if(utilisateurService.isTelelphoneExist(utilisateur.getMatricule()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Ce matricule existe déjà");
		}
		if(!erreurs.isEmpty()){
			model.addAttribute("erreurs", erreurs);
			model.addAttribute("professions", professionService.findAllByOrderByLibelleProfessionAsc());
			model.addAttribute("villes", villeService.getAllVilles());
			model.addAttribute("directions", directionService.getAllDirectionsAsc());
			return "admin/modifierUtilisateur";
		}
		utilisateurService.save(utilisateur);
		return "redirect:/admin/modifierUtilisateur/"+utilisateur.getId();
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
	
	
	@PostMapping("/modifierDemande")
	public String modifierDemandeProcess(Demande demande) {
		demande.setUtilisateur(utilisateurService.getById(demande.getUtilisateur().getId()));
		demandeService.save(demande);
		try {
			sendEmailModifDemande.sendMessage(demande);
		} catch (UnsupportedEncodingException | MessagingException e) {
			e.printStackTrace();
		}
		return "redirect:/admin/infosDemande/"+demande.getId();
	}

}
