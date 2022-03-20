package ci.mfpma.dq.mail;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import ci.mfpma.dq.entites.Demande;

@Component
public class SendEmailModifDemande {
	
	@Autowired
	JavaMailSender emailSender;
	
	public void sendMessage (Demande demande) throws MessagingException, UnsupportedEncodingException {

	    MimeMessage message = emailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	     
	    helper.setFrom("zeibadjo@gmail.com", "WebMaster");
	    helper.setTo(demande.getUtilisateur().getEmail());
	     
	    String subject = "STATUT DEMANDE DE RENDEZ-VOUS MFPMA N° "+demande.getReference().toUpperCase();
	     
	    String content =  "<p>Bonjour ,"+demande.getUtilisateur().getNom().toUpperCase()+"</p>"
        + "<p>Votre demande de rendez-vous a été <b>"+demande.getStatut()+"</b>.</p>"
        + "<p>Direction : <b>" + demande.getDirection().getLibelleDirection() + "</b> entre <b>"+ demande.getTrancheHoraire().getLibelleHeureDebut()+"</b> et "+
        demande.getTrancheHoraire().getLibelleHeureFin()+"</p>"
        + "<p>Connectez vous à votre compte usager-client pour plus d'informations.</p>"
        + "<p>Merci,";
	     
	    helper.setSubject(subject);
		     
		helper.setText(content, true);
		emailSender.send(message);
	}
}
