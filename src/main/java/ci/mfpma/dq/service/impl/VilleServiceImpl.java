package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Ville;
import ci.mfpma.dq.repository.VilleRepository;
import ci.mfpma.dq.service.VilleService;

@Service
public class VilleServiceImpl implements VilleService{

	@Autowired
	VilleRepository villeRepository;
	

	@Override
	public Ville save(Ville ville) {
		return villeRepository.save(ville)	;
	}

	@Override
	public Ville getById(Long Id) {
		return villeRepository.getById(Id);
	}

	@Override
	public void deleteById(Long id) {	
	}

	@Override
	public List<Ville> getAllVilles() {
		return villeRepository.findAllByOrderByLibelleVilleAsc();
	}
	

}
