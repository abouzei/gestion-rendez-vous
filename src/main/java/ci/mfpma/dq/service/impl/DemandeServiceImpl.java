package ci.mfpma.dq.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
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
	@PreAuthorize("hasAuthority('ADMIN') or hasAuthority('CRUC')")
	public List<Demande> getAll() {
		return demandeRepository.findAll();
	}

	@Override
	@PostAuthorize("returnObject.utilisateur.id == principal.id or hasRole('USAGER-CLIENT') ")
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
		if(demande.getId() == null) {
			demande.setDateCreation(Utilitaires.getCurrentDateString());
			demande.setStatut(StatutDemande.SOUMIS);
		}
		demande.setDirection(directionService.getById(demande.getDirection().getId()));
		demande.setTrancheHoraire(trancheHoraireService.getById(demande.getTrancheHoraire().getId()));
		return demandeRepository.save(demande);
	}

	@Override
	@PreAuthorize("#Id == principal.id")
	public List<Demande> listeDemandeByUtilisateurId(Long Id) {
		return demandeRepository.listeDemandeByUtilisateurId(Id);
	}
	
	@Override
	public List<StatutDemande> statutUsc() {
		List<StatutDemande>  statutCRUC = new ArrayList <>();
		statutCRUC.add(StatutDemande.SOUMIS);
		statutCRUC.add(StatutDemande.ANNULER);
		return statutCRUC;
	}

	@Override
	public List<StatutDemande> statutCRUC() {
		List<StatutDemande>  statutCRUC = new ArrayList <>();
		statutCRUC.add(StatutDemande.SOUMIS);
		statutCRUC.add(StatutDemande.PROGRAMMER);
		statutCRUC.add(StatutDemande.REJETER);
		statutCRUC.add(StatutDemande.REFUSER);
		return statutCRUC;
	}

	@Override
	public List<StatutDemande> statutDirection() {
		List<StatutDemande>  statutCRUC = new ArrayList <>();
		statutCRUC.add(StatutDemande.PROGRAMMER);
		statutCRUC.add(StatutDemande.REJETER);
		statutCRUC.add(StatutDemande.REFUSER);
		return statutCRUC;
	}
}
