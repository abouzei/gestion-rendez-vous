package ci.mfpma.dq.entites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "sous_direction")
public class SousDirection implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@SequenceGenerator(name = "sous_direction_sous_direction_id_seq", sequenceName = "sous_direction_sous_direction_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sous_direction_sous_direction_id_seq")
	@Column(name = "sous_direction_id", updatable = false)
	private Long sousDirectionId;
	
	@Column(name = "libelle_sous_direction", nullable = false)
	private String libelleSousDirection;
	
	@Column(name = "libelle_court_sous_direction")
	private String libelleCourtSousDirection;
	
	@ManyToOne
	@JoinColumn(name = "direction_id", foreignKey = @ForeignKey(name = "fk_direction_sous_direction"))
	private Direction  direction;	

	public SousDirection(String libelleSousDirection, String libelleCourtSousDirection) {
		super();
		this.libelleSousDirection = libelleSousDirection;
		this.libelleCourtSousDirection = libelleCourtSousDirection;
	}

	public SousDirection() {
	}

	public Long getSousDirectionId() {
		return sousDirectionId;
	}

	public void setSousDirectionId(Long sousDirectionId) {
		this.sousDirectionId = sousDirectionId;
	}

	public String getLibelleSousDirection() {
		return libelleSousDirection;
	}

	public void setLibelleSousDirection(String libelleSousDirection) {
		this.libelleSousDirection = libelleSousDirection;
	}

	public String getLibelleCourtSousDirection() {
		return libelleCourtSousDirection;
	}

	public void setLibelleCourtSousDirection(String libelleCourtSousDirection) {
		this.libelleCourtSousDirection = libelleCourtSousDirection;
	}
}
