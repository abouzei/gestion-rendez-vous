package ci.mfpma.dq.utilitaires;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sinch.xms.ApiConnection;
import com.sinch.xms.SinchSMSApi;
import com.sinch.xms.api.MtBatchTextSmsResult;
import ci.mfpma.dq.entites.Demande;
import ci.mfpma.dq.entites.Notification;
import ci.mfpma.dq.service.NotificationService;

@Component
public class SendSMS {

	@Autowired
	NotificationService notificationService;
	
	private final String SERVICE_PLAN_ID = "bd140184973440f6923f86ed6bdf5a87";
	private final String TOKEN = "37c8f6c43f92432ea65449425e994f50";
	//private static final String[] RECIPIENTS = {"2250749185165", "2250506982040"};
	private String entete = "MFPMA - DQ";
	
	
	public void sendSMSNotification(Demande demande) {
		String message ="";
		try (ApiConnection conn = ApiConnection.builder().servicePlanId(SERVICE_PLAN_ID).token(TOKEN).start()) {

			// Sending a simple Text Message
			MtBatchTextSmsResult batch =
					conn.createBatch(
							SinchSMSApi.batchTextSms()
							.sender(entete)
							.addRecipient("225"+demande.getUtilisateur().getTelephone())
							.body(message)
							.build());

			System.out.println("Successfully sent batch " + batch.id());

			// Creating simple Group
			//GroupResult group = conn.createGroup(SinchSMSApi.groupCreate().name("Subscriber").build());

			// Adding members (numbers) into the group
			//conn.updateGroup(group.id(), SinchSMSApi.groupUpdate().addMemberInsertion("2250749185165").build());

			/*
			 * // Sending a message to the group batch = conn.createBatch(SinchSMSApi
			 * .batchTextSms() .addRecipient(group.id().toString()) .body("Something good")
			 * .build());
			 */
			if(batch.id()!=null) {
				Notification notification =new Notification();
				notification.setMessageNotification(message);
				notification.setDateCreationNotification(LocalDateTime.now());
				notification.setUsagerClient(demande.getUtilisateur());
				notificationService.save(notification);
			}

			System.out.println("Successfully sent batch " + batch.id());
			
		} catch (Exception e) {
			System.out.println("Batch send failed: " + e.getMessage());
		}
	}
}



