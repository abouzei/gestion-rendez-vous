package ci.mfpma.dq.service;


import java.util.List;
import ci.mfpma.dq.entites.Demande;


public interface DemandeService {
	
	List<Demande> getAll();
		
	Demande save(Demande demande);
	
	Demande getById(Long demandeID);
	
	void deleteById(Demande demande);
	
	Long getValDemandeId();
	
	List<Demande> listeDemandeByUtilisateurId(Long utilisateurId);
	
}
