package ci.mfpma.dq.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import ci.mfpma.dq.entites.Direction;
import ci.mfpma.dq.entites.Role;
import ci.mfpma.dq.entites.Utilisateur;

public class UtilisateurDetails implements UserDetails{
	
private static final long serialVersionUID = 1L;
	
	private Utilisateur utilisateur;
	
	
	public UtilisateurDetails(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<Role> roles = utilisateur.getRoles();
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		for(Role role : roles) {
			authorities.add(new SimpleGrantedAuthority(role.getNomRole()));
		}
		return authorities;
	}

	@Override
	public String getPassword() {
		return utilisateur.getMotDePasse();
	}

	@Override
	public String getUsername() {
		return utilisateur.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
	public Long getId() {
		return utilisateur.getId();
	}
	
	public Direction getDirection() {
		return utilisateur.getDirection();
	}
	
	public String getNomComplet() {
		return utilisateur.getNom()+ " " + utilisateur.getPrenom();
	}
	
	public boolean hasRole(String roleName) {
		return utilisateur.hasRole(roleName);
	}

}
