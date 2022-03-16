package ci.mfpma.dq.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.exception.UtilisateurNotFoundException;
import ci.mfpma.dq.repository.UtilisateurRepository;
import ci.mfpma.dq.security.PasswordEncoder;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;
import ci.mfpma.dq.service.RoleService;
import ci.mfpma.dq.service.UtilisateurService;
import ci.mfpma.dq.service.VilleService;
import net.bytebuddy.utility.RandomString;


@Service
@Transactional
public class UtilisateurServiceImpl implements UtilisateurService{

	@Autowired
	private UtilisateurRepository utilisateurRepository;
	
	@Autowired
	private ProfessionService professionService;
	
	@Autowired
	private VilleService villeService;
	
	@Autowired
	private DirectionService directionService;
	
	@Autowired
	private RoleService roleService;

	@Override
	public List<Utilisateur> getAll() {
		return utilisateurRepository.findAll();
	}
	
	@Override
	public Utilisateur save(Utilisateur utilisateur) {		
		utilisateur.setProfession(professionService.getById(utilisateur.getProfession().getId()));
		utilisateur.setVille(villeService.getById(utilisateur.getVille().getId()));
		utilisateur.addRole(roleService.findByNomRole("USAGER-CLIENT"));
		utilisateur.setMotDePasse(PasswordEncoder.passwordEncoder().encode(utilisateur.getTelephone()));
		return utilisateurRepository.save(utilisateur);
	}
	
	@Override
	public Utilisateur saveUtilisateur(Utilisateur utilisateur) {		
		utilisateur.setDirection(directionService.getById(utilisateur.getDirection().getId()));
		utilisateur.setMotDePasse(PasswordEncoder.passwordEncoder().encode(utilisateur.getTelephone()));
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public Utilisateur getById(Long usagerClientID) {
	    return utilisateurRepository.findById(usagerClientID).get();
	}


	@Override
	public void deleteById(Utilisateur utilisateur) {
		
	}


	@Override
	public Utilisateur findByMatricule(String matricule) {
		return utilisateurRepository.findByMatricule(matricule);
	}
	
	@Override
	public boolean isEmailExist(String email) {
		 return utilisateurRepository.findByEmail(email) !=null ? true : false;
	}

	@Override
	public boolean isMatriculeExist(String matricule) {
		return utilisateurRepository.findByMatricule(matricule) !=null ? true : false;
	}

	@Override
	public boolean isTelelphoneExist(String telephone) {
		return utilisateurRepository.findBytelephone(telephone) !=null ? true : false;
	}

	@Override
	public boolean isNumPieceExist(String numPiece) {
		return utilisateurRepository.findByNumPieceIdentite(numPiece) !=null ? true : false;
	}
	
	@Override
	public String updateResetPasswordToken(String email) throws UtilisateurNotFoundException {
		Utilisateur utilisateur = utilisateurRepository.findByEmail(email);
		if(utilisateur != null) {
			String token = RandomString.make(20);
			utilisateur.setResetPasswordToken(token);
			utilisateurRepository.save(utilisateur);
			return token;
		}else {
			throw new UtilisateurNotFoundException("Ce email utilisateur ne figure pas dans la base de données" + email);
		}
	}
	
	@Override
	public Utilisateur findByResetPasswordToken(String resetPasswordToken) {
		return utilisateurRepository.findByResetPasswordToken(resetPasswordToken);
	}

	@Override
	public void updatePassword(Utilisateur utilisateur, String nouveauPasse) {
		String passwordEncoder = PasswordEncoder.passwordEncoder().encode(nouveauPasse);
		utilisateur.setMotDePasse(passwordEncoder);
		utilisateur.setResetPasswordToken(null);
		utilisateurRepository.save(utilisateur);
	}

	@Override
	public List<Utilisateur> findListUserByRole(Long role) {
		return utilisateurRepository.findListUserByRole(role);
	}
}
