package ci.mfpma.dq.entites;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "profession")
public class Profession {
	
	@Id
	@SequenceGenerator(name = "profession_id_seq", sequenceName = "profession_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "profession_id_seq")
	@Column(name = "profession_id", updatable = false)	
	private Long id;
	
	@Column(name = "libelle_profession")
	private String libelleProfession;
	
	@Column(name = "libelle_court_profession")
	private String libelleCourtProfession;

	@OneToMany(mappedBy = "profession")
	private List<Utilisateur> utilisteur = new ArrayList<Utilisateur>();

	public Profession() {
	}

	public Profession(String libelleProfession, String libelleCourtProfession) {
		super();
		this.libelleProfession = libelleProfession;
		this.libelleCourtProfession = libelleCourtProfession;
	}

	public String getLibelleProfession() {
		return libelleProfession;
	}

	public void setLibelleProfession(String libelleProfession) {
		this.libelleProfession = libelleProfession;
	}

	public String getLibelleCourtProfession() {
		return libelleCourtProfession;
	}

	public void setLibelleCourtProfession(String libelleCourtProfession) {
		this.libelleCourtProfession = libelleCourtProfession;
	}

	public List<Utilisateur> getUtilisteur() {
		return utilisteur;
	}

	public void setUtilisteur(List<Utilisateur> utilisteur) {
		this.utilisteur = utilisteur;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}	
}
