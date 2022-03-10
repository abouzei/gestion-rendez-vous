package ci.mfpma.dq.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import ci.mfpma.dq.security.UtilisateurDetails;

@Controller
public class HomeController {

	@GetMapping("/") 
	public String index(Model model) {
		return	"redirect:/accueil"; 
	}

	@GetMapping("/accueil") 
	public String getAccueil() { 
		return "accueil"; 
	}
	
	
	@GetMapping("/login") 
	public String getLogin(Model model, @AuthenticationPrincipal UtilisateurDetails utilisateurConnecte) { 
		if(utilisateurConnecte != null && utilisateurConnecte.hasRole("Usager-Client")) {
			return "usc/monEspace";
		}
		if(utilisateurConnecte != null && utilisateurConnecte.hasRole("CRUC")) {
			return "cruc/accueil";
		}
		if(utilisateurConnecte != null && utilisateurConnecte.hasRole("Direction")) {
			return "direction/accueil";
		}
		if(utilisateurConnecte != null && utilisateurConnecte.hasRole("Admin")) {
			return "admin/accueil";
		}
		return "login"; 
	}
	
	  @GetMapping("/erreur/accesRefuse")
	    public String showAccessDeniedPage() {
	        return "erreur/403";
	 }
}
