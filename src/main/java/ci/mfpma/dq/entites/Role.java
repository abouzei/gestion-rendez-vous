package ci.mfpma.dq.entites;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Role implements Serializable{
	

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "role_id_seq", sequenceName = "role_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_id_seq")
	@Column(name = "role_id", updatable = false)
	private Long id;
	
	@Column(name = "nom_role", nullable = false)
	private String  nomRole;
	
	public Role() {
	}

	public Role(Long id, String nomRole) {
		this.id = id;
		this.nomRole = nomRole;
	}

	public Role(String nomRole) {
		this.nomRole = nomRole;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomRole() {
		return nomRole;
	}

	public void setNomRole(String nomRole) {
		this.nomRole = nomRole;
	}

	@Override
	public String toString() {
		return this.nomRole;
	}
}
