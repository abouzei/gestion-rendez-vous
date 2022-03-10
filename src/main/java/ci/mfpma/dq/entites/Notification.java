package ci.mfpma.dq.entites;

import java.io.Serializable;
import java.time.LocalDateTime;

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
@Table(name ="notification")
public class Notification implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "notification_seq", sequenceName = "notification_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notification_seq")
	@Column(name = "notification_seq", updatable = false)
	private Long notificationId;
	
	@Column(name="message_notification_sms")
	private String messageNotification;
	
	@Column(name="date_creation_notification")
	private LocalDateTime dateCreationNotification; 

	@ManyToOne
    @JoinColumn(name = "usager_client_id", foreignKey = @ForeignKey(name = "fk_notification_usager_client"))
	private Utilisateur usagerClient;

	public Notification() {
	}

	public Notification(String messageNotification, LocalDateTime dateCreationNotification, Utilisateur usagerClient) {
		this.messageNotification = messageNotification;
		this.dateCreationNotification = dateCreationNotification;
		this.usagerClient = usagerClient;
	}

	public String getMessageNotification() {
		return messageNotification;
	}

	public void setMessageNotification(String messageNotification) {
		this.messageNotification = messageNotification;
	}

	public LocalDateTime getDateCreationNotification() {
		return dateCreationNotification;
	}

	public void setDateCreationNotification(LocalDateTime dateCreationNotification) {
		this.dateCreationNotification = dateCreationNotification;
	}

	public Utilisateur getUsagerClient() {
		return usagerClient;
	}

	public void setUsagerClient(Utilisateur usagerClient) {
		this.usagerClient = usagerClient;
	}
	
	
}
