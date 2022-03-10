package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ci.mfpma.dq.entites.TrancheHoraire;

public interface TrancheHoraireRepository extends JpaRepository<TrancheHoraire, Long>{
	
	@Query("SELECT t.id ,t.libelleHeureDebutTrancheHoraire, t.libelleHeureFinTrancheHoraire FROM TrancheHoraire t WHERE t.id NOT IN (SELECT d.trancheHoraire.id FROM Demande d WHERE d.direction.id = :id AND d.dateRendezVous = :date AND (d.statut = 'SOUMIS' OR d.statut = 'PROGRAMMER' OR d.statut = 'CONFIRMER') )")
	public List<Object[]> getAllFreeTranches(@Param("id") Long id, @Param("date") String dateRdv);
}
