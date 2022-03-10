package ci.mfpma.dq.service;

import java.util.List;

import ci.mfpma.dq.entites.Profession;

public interface ProfessionService {
	
	List<Profession> findAllByOrderByLibelleProfessionAsc();
	
	void save(Profession profession);
	
	Profession getById(Long professionID);
	
	void deleteById(Long id);	


}
