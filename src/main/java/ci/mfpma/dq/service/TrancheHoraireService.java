package ci.mfpma.dq.service;


import java.util.List;

import ci.mfpma.dq.entites.TrancheHoraire;

public interface TrancheHoraireService {
	
	List<TrancheHoraire> getAll();
	
	void save(TrancheHoraire trancheHoraire);
	
	TrancheHoraire getById(Long Id);
	
	void deleteById(TrancheHoraire trancheHoraire);
	
	List<Object[]> getAllFreeTranches(Long id,String dateRdv);
}
