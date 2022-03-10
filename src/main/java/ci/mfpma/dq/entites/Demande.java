package ci.mfpma.dq.entites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "demande")
public class Demande implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "demande_id_seq", sequenceName = "demande_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "demande_id_seq")
	@Column(name = "demande_id", updatable = false)	
	private Long id;
	
	@Column(name = "reference_demande")	
	private String reference;
	
	
	@Column(name = "motif_demande")	
	private String motif;
	
	
	@Column(name = "date_rendez_vous_demande")	
	private String dateRendezVous;
	
	
	@Column(name = "date_creation_demande")	
	private String dateCreation;	
	
    @Enumerated(EnumType.STRING)
    @Column(name = "statutDemande")
	private StatutDemande statut;
	
    
	@ManyToOne
	@JoinColumn(name = "tranche_horaire_id", foreignKey = @ForeignKey(name = "fk_demande_tranche_horaire"))
	private TrancheHoraire trancheHoraire;
	
	
	@ManyToOne
	@JoinColumn(name = "direction_id", foreignKey = @ForeignKey(name = "fk_demande_direction"))
	private Direction direction;
	
	@ManyToOne
	@JoinColumn(name = "utilisateur_id", foreignKey = @ForeignKey(name = "fk_demande_utilisateur"))
	private Utilisateur utilisateur;
	
	public Demande() {
	}	
	
	public Demande(String reference, String motif, String dateRendezVous,
			String dateCreation, StatutDemande statut, TrancheHoraire trancheHoraire,
			Direction direction) {
		this.reference = reference;
		this.motif = motif;
		this.dateRendezVous = dateRendezVous;
		this.dateCreation = dateCreation;
		this.statut = statut;
		this.trancheHoraire = trancheHoraire;
		this.direction = direction;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getMotif() {
		return motif;
	}

	public void setMotif(String motif) {
		this.motif = motif;
	}

	public String getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(String dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getDateRendezVous() {
		return dateRendezVous;
	}

	public void setDateRendezVous(String dateRendezVous) {
		this.dateRendezVous = dateRendezVous;
	}

	public TrancheHoraire getTrancheHoraire() {
		return trancheHoraire;
	}

	public void setTrancheHoraire(TrancheHoraire trancheHoraire) {
		this.trancheHoraire = trancheHoraire;
	}

	public StatutDemande getStatut() {
		return statut;
	}

	public void setStatut(StatutDemande statut) {
		this.statut = statut;
	}

	public Direction getDirection() {
		return direction;
	}

	public void setDirection(Direction direction) {
		this.direction = direction;
	}
}
