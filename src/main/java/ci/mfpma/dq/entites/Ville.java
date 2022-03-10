package ci.mfpma.dq.entites;

import java.io.Serializable;
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
@Table(name = "ville")
public class Ville implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "ville_id_seq", sequenceName = "ville_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ville_id_seq")
	@Column(name = "ville_id", updatable = false)
	private Long id;
	
	@Column(name = "libelle_ville")
	private String libelleVille;
	
	@OneToMany(mappedBy = "ville")
	private List<Utilisateur> utilisateur = new ArrayList<Utilisateur>();
	
	public Ville() {
	}

	public Ville(String libelleVille) {
		this.libelleVille = libelleVille;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLibelleVille() {
		return libelleVille;
	}

	public void setLibelleVille(String libelleVille) {
		this.libelleVille = libelleVille;
	}

	public List<Utilisateur> getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(List<Utilisateur> utilisateur) {
		this.utilisateur = utilisateur;
	}
}
