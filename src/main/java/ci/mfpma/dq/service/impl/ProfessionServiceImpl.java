package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Profession;
import ci.mfpma.dq.repository.ProfessionRepository;
import ci.mfpma.dq.service.ProfessionService;

@Service
public class ProfessionServiceImpl implements ProfessionService{

	@Autowired
	private ProfessionRepository directionRepository;

	@Override
	public void save(Profession profession) {
		this.directionRepository.save(profession);		
	}

	@Override
	public Profession getById(Long professionId) {
	    return directionRepository.findById(professionId).get();
	}

	@Override
	public void deleteById(Long id) {		
	}

	@Override
	public List<Profession> findAllByOrderByLibelleProfessionAsc() {
		return directionRepository.findAllByOrderByLibelleProfessionAsc();
	}
}
