package ci.mfpma.dq.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws ServletException, IOException {
		UtilisateurDetails utilisateurDetails =  (UtilisateurDetails) authentication.getPrincipal() ;
		/*
		 * System.out.println("Nom Utilisateur" + utilisateurDetails.getUsername());
		 * 
		 * Collection<? extends GrantedAuthority> authorities =
		 * utilisateurDetails.getAuthorities(); authorities.forEach(auth ->
		 * System.out.println(auth.getAuthority()));
		 */
		String redirectUrl = request.getContextPath();
		
		if(utilisateurDetails.hasRole("ROLE_USAGER-CLIENT")) {
			redirectUrl = "/usc/monEspace";
		}else if(utilisateurDetails.hasRole("ROLE_ADMIN")) {
			redirectUrl = "/admin/accueilAdmin";
		}else if(utilisateurDetails.hasRole("ROLE_CRUC")) {
			redirectUrl = "/cruc/accueil";
		}else if(utilisateurDetails.hasRole("ROLE_DIRECTION")) {
			redirectUrl = "/direction/accueil";
		}
		response.sendRedirect(redirectUrl);
	}	
}
