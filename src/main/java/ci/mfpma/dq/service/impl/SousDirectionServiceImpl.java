package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.SousDirection;
import ci.mfpma.dq.repository.SousDirectionRepository;
import ci.mfpma.dq.service.SousDirectionService;

@Service
public class SousDirectionServiceImpl implements SousDirectionService{

	@Autowired
	private SousDirectionRepository sousDirectionRepository;

	@Override
	public List<SousDirection> getAll() {
		return sousDirectionRepository.findAll();
	}

	@Override
	public void save(SousDirection sousDirection) {
		this.sousDirectionRepository.save(sousDirection);		
	}

	@Override
	public SousDirection getById(Long directionID) {
	    return sousDirectionRepository.findById(directionID).get();
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}
}
