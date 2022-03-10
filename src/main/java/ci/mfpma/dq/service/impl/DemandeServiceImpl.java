package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.StatutDemande;
import ci.mfpma.dq.repository.DemandeRepository;
import ci.mfpma.dq.service.DemandeService;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.TrancheHoraireService;
import ci.mfpma.dq.utilitaires.Utilitaires;

@Service
public class DemandeServiceImpl implements DemandeService{

	@Autowired
	private DemandeRepository demandeRepository;
	
	@Autowired
	private DirectionService directionService;
	
	@Autowired
	private TrancheHoraireService trancheHoraireService;
	
	
	@Override
	public List<Demande> getAll() {
		return demandeRepository.findAll();
	}

	@Override
	public Demande getById(Long demandeID) {
	    return demandeRepository.findById(demandeID).get();
	}


	@Override
	public void deleteById(Demande demande) {
	}

	@Override
	public Long getValDemandeId() {
		return demandeRepository.getValDemandeId();
	}


	@Override
	public Demande save(Demande demande) {
		demande.setDateCreation(Utilitaires.getCurrentDateString());
		demande.setStatut(StatutDemande.SOUMIS);
		demande.setDirection(directionService.getById(demande.getDirection().getId()));
		demande.setTrancheHoraire(trancheHoraireService.getById(demande.getTrancheHoraire().getId()));
		return demandeRepository.save(demande);
	}

	@Override
	public List<Demande> listeDemandeByUtilisateurId(Long utilisateurId) {
		return demandeRepository.listeDemandeByUtilisateurId(utilisateurId);
	}
}
