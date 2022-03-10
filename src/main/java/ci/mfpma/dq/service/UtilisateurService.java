package ci.mfpma.dq.service;


import java.util.List;
import ci.mfpma.dq.entites.Utilisateur;
import ci.mfpma.dq.exception.UtilisateurNotFoundException;

public interface UtilisateurService {
	
	public List<Utilisateur> getAll();
	
	public Utilisateur save(Utilisateur utilisateur);
	
	public Utilisateur saveUtilisateur(Utilisateur utilisateur);
	
	public Utilisateur getById(Long Id);
	
	public void deleteById(Utilisateur utilisateur);
	
	public Utilisateur findByMatricule(String matricule);
	 
	public boolean isNumPieceExist(String numPiece);
	 
	public boolean isEmailExist(String email);
	 
	public boolean isMatriculeExist(String matricule);
	 
	public boolean isTelelphoneExist(String telephone);
	
	public String updateResetPasswordToken(String email) throws UtilisateurNotFoundException;
	
	public Utilisateur findByResetPasswordToken(String resetPasswordToken);
	
	public void updatePassword(Utilisateur utilisateur, String nouveauPasse);
	
	public List<Utilisateur> findListUserByRole(Long role);
}
