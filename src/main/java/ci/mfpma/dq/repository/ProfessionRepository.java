package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ci.mfpma.dq.entites.Profession;

public interface ProfessionRepository extends JpaRepository<Profession, Long>{
	
	List<Profession> findAllByOrderByLibelleProfessionAsc();

}
