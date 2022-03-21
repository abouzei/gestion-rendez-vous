package ci.mfpma.dq.service;


import java.util.List;
import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.StatutDemande;


public interface DemandeService {
	
	List<Demande> getAll();
		
	Demande save(Demande demande);
	
	Demande getById(Long demandeID);
	
	void deleteById(Demande demande);
	
	Long getValDemandeId();
	
	List<Demande> listeDemandeByDirectionDesc(Long demandeId);
	
	List<Demande> listeDemandeByUtilisateurId(Long utilisateurId);
	
	List<StatutDemande> statutUsc();
	
	List<StatutDemande> statutCRUC();
	
	List<StatutDemande> statutDirection();
}
