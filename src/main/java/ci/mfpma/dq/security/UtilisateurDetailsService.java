package ci.mfpma.dq.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.repository.UtilisateurRepository;

public class UtilisateurDetailsService implements UserDetailsService {

	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Utilisateur utilisateur = utilisateurRepository.findByEmail(username);
		if(utilisateur == null) {
			throw new UsernameNotFoundException("Ce Utilisateur ne figure pas dans la base");
		}
		return new UtilisateurDetails(utilisateur);
	}
}
