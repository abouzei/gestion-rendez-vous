package ci.mfpma.dq.entites;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "tranche_horaire")
public class TrancheHoraire implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "tranche_horaire_id_seq", sequenceName = "tranche_horaire_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tranche_horaire_id_seq")
	@Column(name = "tranche_horaire_id", updatable = false)
	private Long id;
	
	@Column(name = "tranche_horaire_heure_debut")
	private String libelleHeureDebut;
	
	@Column(name = "tranche_horaire_heure_fin")
	private String libelleHeureFin;
	
	@OneToMany(mappedBy = "trancheHoraire", fetch = FetchType.LAZY)
	private List<Demande> demande;
	
	public TrancheHoraire() {
	}
	
	
	public TrancheHoraire(String libelleHeureDebut, String libelleHeureFin) {
		this.libelleHeureDebut = libelleHeureDebut;
		this.libelleHeureFin = libelleHeureFin;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Demande> getDemande() {
		return demande;
	}

	public void setDemande(List<Demande> demande) {
		this.demande = demande;
	}


	public String getLibelleHeureDebut() {
		return libelleHeureDebut;
	}


	public void setLibelleHeureDebut(String libelleHeureDebut) {
		this.libelleHeureDebut = libelleHeureDebut;
	}


	public String getLibelleHeureFin() {
		return libelleHeureFin;
	}


	public void setLibelleHeureFinTrancheHoraire(String libelleHeureFin) {
		this.libelleHeureFin = libelleHeureFin;
	}
	
	
}
