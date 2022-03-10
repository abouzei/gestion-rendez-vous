package ci.mfpma.dq.entites;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
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
@Table(name = "direction")
public class Direction implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "direction_id_seq", sequenceName = "direction_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "direction_id_seq")
	@Column(name = "direction_id", updatable = false)
	private Long id;
	
	@Column(name = "libelle_direction")
	private String libelleDirection;
	
	@Column(name = "libelle_court_direction")
	private String libelleCourtDirection;
	
	@OneToMany(mappedBy = "direction", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<SousDirection> sousDirection;
	
	@OneToMany(mappedBy = "direction", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Demande> Demandes;
	
	@OneToMany(mappedBy = "direction", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Utilisateur> Utilisateur;
	

	public Direction() {
	}	

	public Direction(Long id, String libelleDirection, String libelleCourtDirection) {
		this.id = id;
		this.libelleDirection = libelleDirection;
		this.libelleCourtDirection = libelleCourtDirection;
	}
	
	public Direction(String libelleDirection, String libelleCourtDirection) {
		this.libelleDirection = libelleDirection;
		this.libelleCourtDirection = libelleCourtDirection;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLibelleDirection() {
		return libelleDirection;
	}
	public void setLibelleDirection(String libelleDirection) {
		this.libelleDirection = libelleDirection;
	}
	public String getLibelleCourtDirection() {
		return libelleCourtDirection;
	}
	public void setLibelleCourtDirection(String libelleCourtDirection) {
		this.libelleCourtDirection = libelleCourtDirection;
	}
	
	public List<SousDirection> getSousDirection() {
		return sousDirection;
	}

	public void setSousDirection(List<SousDirection> sousDirection) {
		this.sousDirection = sousDirection;
	}

	public List<Demande> getDemandes() {
		return Demandes;
	}

	public void setDemandes(List<Demande> demandes) {
		Demandes = demandes;
	}

	public List<Utilisateur> getUtilisateur() {
		return Utilisateur;
	}

	public void setUtilisateur(List<Utilisateur> utilisateur) {
		Utilisateur = utilisateur;
	}

	@Override
	public String toString() {
		return "Direction [directionID=" + id + ", libelleDirection=" + libelleDirection
				+ ", libelleCourtDirection=" + libelleCourtDirection + "]";
	}
}
