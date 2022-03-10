package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ci.mfpma.dq.entites.Utilisateur;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
	
	 
	@Query("SELECT u FROM Utilisateur u WHERE u.numPieceIdentite = ?1")
	public Utilisateur findByNumPieceIdentite(String numPiece);
	 
	@Query("SELECT u FROM Utilisateur u WHERE u.email = ?1")
	public Utilisateur findByEmail(String email);
	
	@Query("SELECT u FROM Utilisateur u WHERE u.matricule = ?1")
	public Utilisateur findByMatricule(String matricule);
	
	@Query("SELECT u FROM Utilisateur u WHERE u.telephone = ?1")
	public Utilisateur findBytelephone(String telephone);
	
	@Query("SELECT u FROM Utilisateur u LEFT JOIN u.roles r WHERE r.id = ?1")
	public List<Utilisateur> findListUserByRole(Long role);
	 
	public Utilisateur findByResetPasswordToken(String resetPasswordToken);
	
}
