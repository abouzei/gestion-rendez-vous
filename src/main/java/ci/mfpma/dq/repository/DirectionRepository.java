package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ci.mfpma.dq.entites.Direction;


@Repository
public interface DirectionRepository extends JpaRepository<Direction, Long>{
	
	@Query("SELECT d.id, d.libelleDirection FROM Direction d ORDER BY d.libelleDirection ASC")
	List<Object> getAllDirections();
	
	List<Direction> findAllByOrderByLibelleDirectionAsc();

}
