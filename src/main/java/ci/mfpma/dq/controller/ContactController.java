package ci.mfpma.dq.controller;
import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactController {
	
	@Autowired
	JavaMailSender emailSender;
	
	@GetMapping("/contact") 
	public String getContact() { 
		return "contact"; 
	}
	
	@PostMapping("/envoyerMessage")
	public String sendMessage(HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {
		String nomComplet = request.getParameter("nomcomplet");
		String emailSender = request.getParameter("email");
		String objet   = request.getParameter("objet");
		String contenu  = request.getParameter("contenu");
		
		MimeMessage message = this.emailSender.createMimeMessage();
		MimeMessageHelper helper =  new MimeMessageHelper(message);
		

		String  objetEmail = nomComplet+ " à envoyer un message";
		String contenuEmail = "<p><b>Nom Expéditeur:</b> " + nomComplet +"</p>";
		contenuEmail += "<p><b>Objet:<p><b> " +objet +"</p>";
		contenuEmail += "<p><b>Message:<p><b> " +contenu +"</p>";
		
		
		helper.setFrom(emailSender,"Contact Konate");
		helper.setTo("kon_abou_zei@yahoo.fr");	
		helper.setSubject(objetEmail);
		helper.setText(contenuEmail, true);
		this.emailSender.send(message);
		
		return "succesMessage";
	}

}
