package ci.mfpma.dq.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;
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
import ci.mfpma.dq.mail.MessageEmail;
import ci.mfpma.dq.security.UtilisateurDetails;
import ci.mfpma.dq.service.DemandeService;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.service.VilleService;
import ci.mfpma.dq.utilitaires.SendEmailUtilExist;
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
	private UtilisateurService utilisateurService;
	
	@Autowired
	SendEmailUtilExist sendEmail;

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
	
	
	@PostMapping("/soumettreMaDemande")
	public String soumettreMaDemandeProcess(Demande demande, Model model, @AuthenticationPrincipal UtilisateurDetails util) {
		demande.setUtilisateur(utilisateurService.getById(util.getId()));
		Demande demandeCree = demandeService.save(demande);
		demandeCree.setReference(Utilitaires.referenceDemande(demandeCree.getId()));
		demandeService.save(demandeCree);
		try {
			sendEmail.sendMessage(demandeCree, util.getEmail());
		} catch (UnsupportedEncodingException | MessagingException e) {
			e.printStackTrace();
		}
		return "redirect:/usc/mesDemandes";
	}

}
