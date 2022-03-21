package ci.mfpma.dq.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.Utilisateur;

public interface DemandeRepository extends JpaRepository<Demande, Long> {
	
	@Query(value = "select currval('demande_demande_id_seq')",nativeQuery = true)
	public Long getValDemandeId();
	
    @Query("select d from Demande d where d.utilisateur.id = :id ")
    public List<Demande> listeDemandeByUtilisateurId(@Param("id") Long id);
    
    @Query("SELECT d from Demande d WHERE d.direction.id = ?1 ORDER BY d.dateCreation DESC")
    public List<Demande> listeDemandeByDirectionDesc(Long demandeId);
}
