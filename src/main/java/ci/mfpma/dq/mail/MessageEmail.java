package ci.mfpma.dq.mail;

import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.Utilisateur;

public class MessageEmail {
	
	public static String getMessageDemande(Demande demande) {
		return  "<p>Bonjour ,</p>"
	            + "<p>Vous avez été enregistré dans notre base de données après avoir soumis une demande de rendez-vous.</p>"
	            +"<p>Numéro de la demande : <b>" + demande.getReference() + "</b> du : "+ demande.getDateCreation() +"</p>"
	            + "<p>Les identifiants vous permettant de suivre votre demande sont les suivants : </p>"
	            + "<p>Identifiant : <b>" + demande.getUtilisateur().getEmail() + "</b></p>"
	    	    + "<p>Mot de passe : <b>" + demande.getUtilisateur().getTelephone() + "</b></p>"
	            + "<br>"
	            + "<p>Merci,";
	}
	
	public static String getMessageUtilisateurExistant(Demande demande) {
		return  "<p>Bonjour ,</p>"
	            + "<p>Vous avez été enregistré dans notre base de données après avoir soumis une demande de rendez-vous.</p>"
	            +"<p>Numéro de la demande : <b>" + demande.getReference() + "</b> du : "+ demande.getDateCreation() +"</p>"
	            + "<p>Connectez vous avec vos identifiants identiques : </p>"
	            + "<br>"
	            + "<p>Merci,";
	}
	
	
	public static String getMessageUtilisateur(Utilisateur utilisateur) {
		return  "<p>Bonjour ,</p>"
	            + "<p>Vous avez été enregistré en tant que utilisateur  la plateforme de gestion des rendez-vous.</p>"
	            + "<p>Les identifiants vous permettant de vous connecter : </p>"
	            + "<p>Identifiant : <b>" + utilisateur.getEmail() + "</b></p>"
	    	    + "<p>Mot de passe : <b>" + utilisateur.getTelephone() + "</b></p>"
	            + "<br>"
	            + "<p>Merci,";
	}
	
	public String getMessageResetPassword() {
		
		return "";
	}	

}
