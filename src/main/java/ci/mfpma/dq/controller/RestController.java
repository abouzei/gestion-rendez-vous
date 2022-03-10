package ci.mfpma.dq.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ci.mfpma.dq.service.TrancheHoraireService;

@Controller
public class RestController {

	@Autowired
	private TrancheHoraireService trancheHoraireService;

	@GetMapping("demande/listeTranche")
	public @ResponseBody String getTranche(@RequestParam Long directionId, String date)
	{
		System.out.println("vu Tranche");
		String json = null; 
		System.out.println(directionId+" "+date);		
		List<Object[]> list = trancheHoraireService.getAllFreeTranches(directionId,date); 
		try {
			json = new ObjectMapper().writeValueAsString(list); 
		}
		catch  (JsonProcessingException e) { 
			e.printStackTrace();
		}
		return json;
	}
	
	
	@GetMapping("usc/nouvelleDemande/listeTranche")
	public @ResponseBody String getTrancheUsc(@RequestParam Long directionId, String date)
	{
		System.out.println("vu Tranche");
		String json = null; 
		System.out.println(directionId+" "+date);		
		List<Object[]> list = trancheHoraireService.getAllFreeTranches(directionId,date); 
		try {
			json = new ObjectMapper().writeValueAsString(list); 
		}
		catch  (JsonProcessingException e) { 
			e.printStackTrace();
		}
		return json;
	}


}
