package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Direction;
import ci.mfpma.dq.repository.DirectionRepository;
import ci.mfpma.dq.service.DirectionService;

@Service
public class DirectionServiceImpl implements DirectionService{

	@Autowired
	private DirectionRepository directionRepository;

	@Override
	public void save(Direction direction) {
		this.directionRepository.save(direction);		
	}

	@Override
	public Direction getById(Long directionID) {
	    return directionRepository.findById(directionID).get();
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Direction> getAllDirectionsAsc() {
		return directionRepository.findAllByOrderByLibelleDirectionAsc();
	}

	@Override
	public List<Object> getAllDirections() {
		return directionRepository.getAllDirections();
	}
}
