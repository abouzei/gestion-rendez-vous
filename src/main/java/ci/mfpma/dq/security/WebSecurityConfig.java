package ci.mfpma.dq.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	
	private static final String[] PUBLIC_MATCHERS_GET = {
			"/css/**",
			"/js/**",
			"/jquery/**",
			"/",
			"/accueil",
			"/contact",
			"/utilisateur/passeOublier",
			"/utilisateur/changerPasse",
			"/demande/nouvelleDemande",
			"/demande/nouvelleDemandeFonctionnaire",
			
	};
	
	
	
	@Autowired
	private LoginSuccessHandler loginSuccessHandler;
	
	@Bean
	public UserDetailsService userDetailsService() {
		return new UtilisateurDetailsService();
	}
	
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider =  new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService());
		authProvider.setPasswordEncoder(PasswordEncoder.passwordEncoder());
		return authProvider;
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.GET,PUBLIC_MATCHERS_GET).permitAll()
			.antMatchers("/usc/**").hasAuthority("USAGER-CLIENT")
			.antMatchers("/uilisateur/**").hasAnyAuthority("USAGER-CLIENT","CRUC","DIRECTION")
			.and()
			.formLogin()
				.loginPage("/login")
				.loginProcessingUrl("/login")
				.successHandler(loginSuccessHandler)
			.permitAll()
		    .and()
            .exceptionHandling().accessDeniedPage("/erreur/accesRefuse");
		
	}

}
