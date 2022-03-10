package ci.mfpma.dq.service;

import java.util.List;

import ci.mfpma.dq.entites.Ville;


public interface VilleService {
	
	Ville save(Ville ville);
	
	Ville getById(Long Id);
	
	void deleteById(Long id);
	
	List<Ville> getAllVilles();

}
