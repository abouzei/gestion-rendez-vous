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
public class SendEmailUtilExist {
	
	@Autowired
	JavaMailSender emailSender;
	
	public void sendMessage (Demande demande, String email) throws MessagingException, UnsupportedEncodingException {

	    MimeMessage message = emailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	     
	    helper.setFrom("zeibadjo@gmail.com", "WebMaster");
	    helper.setTo(email);
	     
	    String subject = "LOGIN ET MOT DE PASSE";
	     
	    String content =  "<p>Bonjour ,<b>"+ demande.getUtilisateur().getNom()+"</b></p>"
        + "<p>vous avez soumis une demande de rendez-vous.</p>"
        +"<p>Numéro de la demande : <b>" + demande.getReference() + "</b> du : "+ demande.getDateCreation() +"</p>"
        + "<p>Connectez vous avec vos identifiants identiques </p>"
        + "<br>"
        + "<p>Merci,";
	     
	    helper.setSubject(subject);
		     
		helper.setText(content, true);
		emailSender.send(message);
	}
}
