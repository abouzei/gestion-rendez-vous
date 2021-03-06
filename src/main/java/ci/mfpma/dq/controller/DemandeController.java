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
import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.mail.SendEmailNouvelleDemande;
import ci.mfpma.dq.service.DemandeService;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.service.VilleService;

import ci.mfpma.dq.utilitaires.SendSMS;
import ci.mfpma.dq.utilitaires.Utilitaires;


@Controller
@RequestMapping("/demande")
public class DemandeController {
	
	@Autowired
	private UtilisateurService utilisateurService;

	@Autowired
	private VilleService villeService;
	
	@Autowired
	private DirectionService directionService;

	@Autowired
	private ProfessionService professionService;
	
	@Autowired
	private DemandeService demandeService;
	
	@Autowired
	SendEmailNouvelleDemande sendEmail;
	
	@Autowired
	SendSMS sendSms;
	
	@GetMapping("/nouvelleDemande") 
	public String getNouvelleDemande(Model model) {
		model.addAttribute("demande", new Demande());
		model.addAttribute("directions", directionService.getAllDirections());
		model.addAttribute("professions", professionService.findAllByOrderByLibelleProfessionAsc());
		model.addAttribute("villes", villeService.getAllVilles());
		return "demande/nouvelleDemande"; 
	}

	@GetMapping("/nouvelleDemandeFonctionnaire") 
	public String getNouvelleDemandeFonctionnaire(Model model) {
		model.addAttribute("directions", directionService.getAllDirections());
		model.addAttribute("demande", new Demande());
		return "demande/nouvelleDemandeFonctionnaire"; 
	}
	

	@PostMapping("/soumettreDemande")
	public String soumettreDemandeProcess(Demande demande, Model model) {
		List<String> erreurs = new ArrayList<>();
		if(utilisateurService.isEmailExist(demande.getUtilisateur().getEmail())) {
			erreurs.add("Cette adresse email existe d??j??");
		}		
		if(utilisateurService.isNumPieceExist(demande.getUtilisateur().getNumPieceIdentite())) {
			erreurs.add("Ce num??ro de pi??ce existe d??j??");
		}
		if(utilisateurService.isTelelphoneExist(demande.getUtilisateur().getTelephone())) {
			erreurs.add("Ce num??ro de t??l??phone existe d??j??");
		}
		if(!erreurs.isEmpty()) {
			model.addAttribute("erreurs", erreurs);
			model.addAttribute("directions", directionService.getAllDirections());
			model.addAttribute("professions", professionService.findAllByOrderByLibelleProfessionAsc());
			model.addAttribute("villes", villeService.getAllVilles());
			return "demande/nouvelleDemande";
		}
		demande.setUtilisateur(utilisateurService.save(demande.getUtilisateur()));
		Demande demandeCree = demandeService.save(demande);
		demandeCree.setReference(Utilitaires.referenceDemande(demandeCree.getId()));
		demandeService.save(demandeCree);
		try {
			sendEmail.sendMessage(demandeCree);
		} catch (UnsupportedEncodingException | MessagingException e) {
			e.printStackTrace();
		}
		//sendSms.sendSMSNotification(demandeCree);
		return "demande/succesDemande";
	}
	

	@PostMapping("soumettreDemandeFonctionnaire")
	public String soumettreDemandeFonctionaireProcess(Model model, Demande demande) {
		if(utilisateurService.isMatriculeExist(demande.getUtilisateur().getMatricule())) {
			model.addAttribute("erreurMatricule", "Ce matricule ne figure pas dans la base de donn??es");
			model.addAttribute("directions", directionService.getAllDirections());
			return "demande/nouvelleDemandeFonctionnaire";
		}
		demande.setUtilisateur(utilisateurService.findByMatricule(demande.getUtilisateur().getMatricule()));
		Demande demandeCree = demandeService.save(demande);
		demandeCree.setReference(Utilitaires.referenceDemande(demandeCree.getId()));
		demandeService.save(demandeCree);
		//sendSms.sendSMSNotification(demandeCree);
		return "demande/succesDemande";
	}
}
