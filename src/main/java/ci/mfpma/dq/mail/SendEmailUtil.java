package ci.mfpma.dq.mail;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import ci.mfpma.dq.entites.Utilisateur;

@Component
public class SendEmailUtil {
	
	@Autowired
	JavaMailSender emailSender;
	
	public void sendMessage (Utilisateur utilisateur) throws MessagingException, UnsupportedEncodingException {

	    MimeMessage message = emailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	     
	    helper.setFrom("zeibadjo@gmail.com", "WebMaster");
	    helper.setTo(utilisateur.getEmail());
	     
	    String subject = "LOGIN ET MOT DE PASSE";
	     
	    String content =  "<p>Bonjour ,</p>"
        + "<p>Vous avez été enregistré en tant que utilisateur  la plateforme de gestion des rendez-vous.</p>"
        + "<p>Les identifiants vous permettant de vous connecter : </p>"
        + "<p>Identifiant : <b>" + utilisateur.getEmail() + "</b></p>"
	    + "<p>Mot de passe : <b>" + utilisateur.getTelephone() + "</b></p>"
        + "<br>"
        + "<p>Merci,";
	     
	    helper.setSubject(subject);
		     
		helper.setText(content, true);
		emailSender.send(message);
	}
}
