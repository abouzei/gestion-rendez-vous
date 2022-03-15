package ci.mfpma.dq.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.TrancheHoraire;
import ci.mfpma.dq.repository.TrancheHoraireRepository;
import ci.mfpma.dq.service.TrancheHoraireService;


@Service
public class TrancheHoraireServiceImpl implements TrancheHoraireService{
	
	@Autowired
	TrancheHoraireRepository trancheHoraireRepository;

	@Override
	public List<TrancheHoraire> getAll() {
		return trancheHoraireRepository.findAll();
	}

	@Override
	public void save(TrancheHoraire trancheHoraire) {
		trancheHoraireRepository.save(trancheHoraire);
	}

	@Override
	public TrancheHoraire getById(Long Id) {
		return trancheHoraireRepository.getById(Id);
	}

	@Override
	public void deleteById(TrancheHoraire trancheHoraire) {
		// TODO Auto-generated method stub
	}

	@Override
	public List<Object[]> getAllFreeTranches(Long id, String dateRdv) {
		return trancheHoraireRepository.getAllFreeTranches(id, dateRdv);
	}
}
