package ci.mfpma.dq.service;


import java.util.List;

import ci.mfpma.dq.entites.Direction;

public interface DirectionService {
	
	List<Direction> getAllDirectionsAsc();
	
	void save(Direction direction);
	
	Direction getById(Long directionID);
	
	void deleteById(Long id);
	
	List<Object> getAllDirections();
}
