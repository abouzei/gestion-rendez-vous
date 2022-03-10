package ci.mfpma.dq.utilitaires;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class ConvertDateTime {
	
	private static LocalTime timeConvert;
	
	private static LocalDateTime localDateTimeConcat;
	
	public static LocalTime convertTimeStringToTime(String time) {
		timeConvert = LocalTime.parse(time) ;
		return timeConvert; 
	}
	
	public static LocalDateTime concatDateAndTime(String date, String time) {
		LocalDate datePart = LocalDate.parse(date);
	    LocalTime timePart = LocalTime.parse(time);
	    localDateTimeConcat = LocalDateTime.of(datePart, timePart);   
	    return localDateTimeConcat;
	}
}
