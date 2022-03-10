package ci.mfpma.dq.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
import ci.mfpma.dq.security.UtilisateurDetails;
import ci.mfpma.dq.service.DemandeService;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.service.VilleService;
import ci.mfpma.dq.utilitaires.SendSMS;
import ci.mfpma.dq.utilitaires.Utilitaires;

@Controller 
@RequestMapping("/usc")
public class CompteController {
	
	@Autowired
	private DirectionService directionService;
	
	@Autowired
	private DemandeService demandeService;
	
	@Autowired
	private ProfessionService professionService;
	
	@Autowired
	private VilleService villeService;
	
	@Autowired
	private UtilisateurService utilisateurService;
	
	@Autowired
	private SendSMS sendSms;

	@GetMapping("/monEspace") 
	public String getEspace(Model model) { 
		return "usc/monEspace";
	}
	
	@GetMapping("/nouvelleDemande") 
	public String getNouvelleDemande(Model model) { 
		model.addAttribute("demande", new Demande());
		model.addAttribute("directions", directionService.getAllDirections());
		return "usc/nouvelleDemande"; 
	}
	
	@GetMapping("/mesDemandes") 
	public String getMesDemandes(Model model,@AuthenticationPrincipal UtilisateurDetails util) { 
		model.addAttribute("demandes", demandeService.listeDemandeByUtilisateurId(util.getId()));
		return "usc/mesDemandes"; 
	}
	
	@GetMapping("/maMessagerie") 
	public String getMaMessagerie() { 
			return "usc/maMessagerie"; 
	}
	
	@GetMapping("/detailDemande/{demandeId}")
	public String getDetailsDemandeUsagerClient(@PathVariable("demandeId") Long demandeId, Model model) {
			Demande demande = demandeService.getById(demandeId);
			model.addAttribute("demande", demande);
			return"usc/detailDemande";
	}
	
	@PostMapping("/modifierMonCompte")
	public String modifierMonCompteProcess(Utilisateur utilisateur, Model model, @AuthenticationPrincipal UtilisateurDetails util) {
		List<String> erreurs = new ArrayList<>();
		if(utilisateurService.isEmailExist(utilisateur.getEmail()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Cette adresse email existe déjà");
		}		
		if(utilisateurService.isNumPieceExist(utilisateur.getNumPieceIdentite()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Ce numéro de pièce existe déjà");
		}
		if(utilisateurService.isTelelphoneExist(utilisateur.getTelephone()) && utilisateur.getId() != util.getId()) {
			erreurs.add("Ce numéro de téléphone existe déjà");
		}
		if(!erreurs.isEmpty()){
			model.addAttribute("erreurs", erreurs);
			model.addAttribute("professions", professionService.findAllByOrderByLibelleProfessionAsc());
			model.addAttribute("villes", villeService.getAllVilles());
			return "usc/monCompte";
		}
		utilisateurService.save(utilisateur);
		return "redirect:/usc/monCompte";
	}
	
	@PostMapping("/modifierPasse")
	public String modifierPasseProcess(Demande demande, Model model, @AuthenticationPrincipal UtilisateurDetails util, HttpServletRequest request) {
		String passe = request.getParameter("password");
		Utilisateur utilisateur = utilisateurService.getById(util.getId());
		utilisateurService.updatePassword(utilisateur, passe);
		return "redirect:/usc/monEspace";
	}
	
	@PostMapping("/soumettreMaDemande")
	public String soumettreMaDemandeProcess(Demande demande, Model model, @AuthenticationPrincipal UtilisateurDetails util) {
		demande.setUtilisateur(utilisateurService.getById(util.getId()));
		Demande demandeCree = demandeService.save(demande);
		demandeCree.setReference(Utilitaires.referenceDemande(demandeCree.getId()));
		demandeService.save(demandeCree);
		return "redirect:/usc/mesDemandes";
	}

}
