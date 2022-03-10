package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ci.mfpma.dq.entites.Ville;

@Repository
public interface VilleRepository extends JpaRepository<Ville, Long>{
	
	List<Ville> findAllByOrderByLibelleVilleAsc();

}
