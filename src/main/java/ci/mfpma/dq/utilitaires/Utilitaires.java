package ci.mfpma.dq.utilitaires;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ci.mfpma.dq.service.DirectionService;
import ci.mfpma.dq.service.ProfessionService;

@Component
public class Utilitaires {

	
	@Autowired
	ProfessionService professionService;
	
	@Autowired
	DirectionService directionService;
	
	
	private static final String DATE_FORMATTER= "dd/MM/yyyy";
	
	private static final String TIME_FORMATTER= "HH:mm:ss";
	
	public static String referenceDemande(Long demandeId) { 
		return "FDRVUC/"+LocalDate.now().getYear()+"/"+demandeId;
	}
	
	public static String getCurrentDateString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
        return LocalDateTime.now().format(formatter);
    }
	
	
	public static String getCurrentTimeStamp() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(TIME_FORMATTER);
        return LocalDateTime.now().format(formatter);
    }
	
	public static String getUrl(HttpServletRequest request) {
		String siteURL = request.getRequestURL().toString();
		return siteURL.replace(request.getServletPath(), "");
	}
}
