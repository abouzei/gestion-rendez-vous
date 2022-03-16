package ci.mfpma.dq.utilitaires;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.Utilisateur;

@Component
public class SendEmailNouvelleDemande {
	
	@Autowired
	JavaMailSender emailSender;
	
	public void sendMessage (Demande demande) throws MessagingException, UnsupportedEncodingException {

	    MimeMessage message = emailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	     
	    helper.setFrom("zeibadjo@gmail.com", "WebMaster");
	    helper.setTo(demande.getUtilisateur().getEmail());
	     
	    String subject = "DEMANDE DE RENDEZ-VOUS MFPMA N° "+demande.getReference().toUpperCase();
	     
	    String content =  "<p>Bonjour ,"+demande.getUtilisateur().getNom().toUpperCase()+"</p>"
        + "<p>Vous avez été enregistré dans notre base de données après avoir soumis une demande de rendez-vous.</p>"
        +"<p>Numéro de la demande : <b>" + demande.getReference() + "</b> du "+ demande.getDateCreation() +"</p>"
        + "<p>Les identifiants vous permettant de suivre votre demande sont les suivants : </p>"
        + "<p>Identifiant : <b>" + demande.getUtilisateur().getEmail() + "</b></p>"
	    + "<p>Mot de passe : <b>" + demande.getUtilisateur().getTelephone() + "</b></p>"
        + "<br>"
        + "<p>Merci.";
	     
	    helper.setSubject(subject);
		     
		helper.setText(content, true);
		emailSender.send(message);
	}
}
