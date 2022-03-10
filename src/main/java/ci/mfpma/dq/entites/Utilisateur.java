package ci.mfpma.dq.entites;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "utilisateur", uniqueConstraints = {@UniqueConstraint(name = "email_un_utilisateur", columnNames = {"email"}),
												  @UniqueConstraint(name = "matricule_un_utilisateur", columnNames = {"matricule"})})
public class Utilisateur implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "utilisateur_id_seq", sequenceName = "utilisateur_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "utilisateur_id_seq")
	@Column(name = "utilisateur_id")	
	private Long id;
	
	@Column(name = "matricule")
	private String matricule;
	
	@Column(name = "num_piece_identite")
	private String numPieceIdentite;
	
	@Column(name = "date_etablissement_piece_identite")
	private String dateEtablissemenPieceIdentite;	
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "mot_de_passe")
	private String  motDePasse;
	
	@Column(name = "nom")
	private String  nom;
	
	@Column(name = "prenom")
	private String prenom;
	
	@Column(name = "genre")
	private String genre;
	
	@Column(name = "tranche_age")
	private String trancheAge;
		
	@Column(name = "telephone")
	private String telephone;
	
	@Column(name = "image")
	private String  image;
	
	@Column(name = "reset_password_token")
	private String resetPasswordToken;
	
	@Column(name = "employeur")
	private String employeur;
	
	@ManyToOne
	@JoinColumn(name = "ville_id", foreignKey = @ForeignKey(name = "fk_ville_utilisateur"))
	private Ville ville;	
	
	@ManyToOne
	@JoinColumn(name = "profession_id", foreignKey = @ForeignKey(name = "fk_profession_utilisateur"))
	private Profession profession;
	
	@OneToMany(mappedBy = "utilisateur")
	private List<Demande> demandes = new ArrayList<Demande>();

	@ManyToOne
	@JoinColumn(name = "direction_id", foreignKey = @ForeignKey(name = "fk_direction_utilisateur"))
	private Direction  direction;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
			name = "roles_utilisateurs",
			joinColumns = @JoinColumn(name = "utilisateur_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id")
			)
	private List<Role> roles = new ArrayList<Role>(); 
	
	public Utilisateur() {
	}
	
	
	public Utilisateur(String matricule, String numPieceIdentite, String dateEtablissemenPieceIdentite, String email,
			String motDePasse, String nom, String prenom, String genre, String trancheAge, String telephone,
			String image, String resetPasswordToken, String employeur, Ville ville, Profession profession,
			List<Demande> demandes, Direction direction, List<Role> roles) {
		super();
		this.matricule = matricule;
		this.numPieceIdentite = numPieceIdentite;
		this.dateEtablissemenPieceIdentite = dateEtablissemenPieceIdentite;
		this.email = email;
		this.motDePasse = motDePasse;
		this.nom = nom;
		this.prenom = prenom;
		this.genre = genre;
		this.trancheAge = trancheAge;
		this.telephone = telephone;
		this.image = image;
		this.resetPasswordToken = resetPasswordToken;
		this.employeur = employeur;
		this.ville = ville;
		this.profession = profession;
		this.demandes = demandes;
		this.direction = direction;
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getNumPieceIdentite() {
		return numPieceIdentite;
	}

	public void setNumPieceIdentite(String numPieceIdentite) {
		this.numPieceIdentite = numPieceIdentite;
	}


	public String getDateEtablissemenPieceIdentite() {
		return dateEtablissemenPieceIdentite;
	}

	public void setDateEtablissemenPieceIdentite(String dateEtablissemenPieceIdentite) {
		this.dateEtablissemenPieceIdentite = dateEtablissemenPieceIdentite;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMotDePasse() {
		return motDePasse;
	}

	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getTrancheAge() {
		return trancheAge;
	}

	public void setTrancheAge(String trancheAge) {
		this.trancheAge = trancheAge;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getEmployeur() {
		return employeur;
	}

	public void setEmployeur(String employeur) {
		this.employeur = employeur;
	}

	public Ville getVille() {
		return ville;
	}

	public void setVille(Ville ville) {
		this.ville = ville;
	}

	public Profession getProfession() {
		return profession;
	}

	public void setProfession(Profession profession) {
		this.profession = profession;
	}

	public List<Demande> getDemandes() {
		return demandes;
	}

	public void setDemandes(List<Demande> demandes) {
		this.demandes = demandes;
	}

	public String getResetPasswordToken() {
		return resetPasswordToken;
	}

	public void setResetPasswordToken(String resetPasswordToken) {
		this.resetPasswordToken = resetPasswordToken;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}	
	
	public void addRole(Role role) {
		this.roles.add(role);
	}	
	
	public Direction getDirection() {
		return direction;
	}

	public void setDirection(Direction direction) {
		this.direction = direction;
	}

	public boolean hasRole(String roleName) {
		Iterator<Role> iterator = roles.iterator();

		while (iterator.hasNext()) {
			Role role = iterator.next();
			if (role.getNomRole().equals(roleName)) {
				return true;
			}
		}
		return false;
	}
}
