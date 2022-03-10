package ci.mfpma.dq.controller;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.exception.UtilisateurNotFoundException;
import ci.mfpma.dq.security.UtilisateurDetails;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;
import ci.mfpma.dq.service.RoleService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.service.VilleService;
import ci.mfpma.dq.utilitaires.SendEmailResetPassword;
import ci.mfpma.dq.utilitaires.Utilitaires;

@Controller
@RequestMapping("/utilisateur")
public class UtilisateurController {
	
	
	@Autowired
	private DirectionService directionService;
	
	@Autowired
	private RoleService roleService;
	
	@Autowired
	private UtilisateurService utilisateurService;
	
	@Autowired
	private ProfessionService professionService;
	
	@Autowired
	private VilleService villeService;
	
	@Autowired
	SendEmailResetPassword sendEmail;
	
	
	
	@GetMapping("/monCompte") 
	public String getMonCompte(Model model,@AuthenticationPrincipal UtilisateurDetails util) {
		model.addAttribute("professions", professionService.findAllByOrderByLibelleProfessionAsc());
		model.addAttribute("villes", villeService.getAllVilles());
		model.addAttribute("utilisateur", utilisateurService.getById(util.getId()));
		return "utilisateur/monCompte"; 
	}
	
	@GetMapping("/passeOublier") 
	public String getPasseOublier() { 
		return "utilisateur/passeOublier"; 
	}
	
	@GetMapping("/modifierPasse") 
	public String getModifierPasse() { 
		return "utilisateur/modifierPasse"; 
	}
	
	
	@PostMapping("/passeOublier") 
	public String passeOublierProcess(HttpServletRequest request, Model model) { 
		String email = request.getParameter("email");
		try {
			String token = utilisateurService.updateResetPasswordToken(email);
			String resetPasswordLink = Utilitaires.getUrl(request) + "/reset_password?token=" + token;
			sendEmail.sendMessage(email, resetPasswordLink);
		}catch (UtilisateurNotFoundException ex) {
			model.addAttribute("erreur", ex.getMessage());
		}catch (MessagingException | UnsupportedEncodingException e) {
			model.addAttribute("erreur", e.getMessage());
		}
		return "utilisateur/passeOublier"; 
	}
	
	@GetMapping("/changerPasse") 
	public String getChangerPasse(@Param(value= "token") String token, Model model) { 
		Utilisateur utilisateur = utilisateurService.findByResetPasswordToken(token);
		model.addAttribute("token", token);
		if(utilisateur == null) {
			model.addAttribute("titre", "Réiniialiser votre mot de passe");
			model.addAttribute("message", "Lien de modification de mot passe invalide");
			return "utilisateur/messageReinitialisation";
		}
		return "utilisateur/changerPasse"; 
	}
	
	@PostMapping("/reinitialiserPasse")
	public String reinitiliserPasseProcess(HttpServletRequest request, Model model) {
		String token = request.getParameter("token");
	    String password = request.getParameter("password");
	    Utilisateur utilisateur = utilisateurService.findByResetPasswordToken(token);
	    model.addAttribute("titre", "Réiniialiser votre mot de passe");
	    if (utilisateur == null) {
	        model.addAttribute("message", "Lien de modification de mot passe invalide");
	        return "utilisateur/messageReinitialisation";
	    } else {           
	    	utilisateurService.updatePassword(utilisateur, password);
	        model.addAttribute("message", "Vous avez modifier votre mot de passe avec succès");
	    }	     
	    return "utilisateur/messageReinitialisation";
	}
	
	@GetMapping("/succesCreation") 
	public String getSuccesCreation() { 
		return "utilisateur/succesCreation"; 
	}
}
