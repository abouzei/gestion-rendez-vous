package ci.mfpma.dq.service;


import java.util.List;

import ci.mfpma.dq.entites.SousDirection;


public interface SousDirectionService {
	
	List<SousDirection> getAll();
	
	void save(SousDirection sousDirection);
	
	SousDirection getById(Long sousDirectionID);
	
	void deleteById(Long id);
}
