package ci.mfpma.dq.service;


import java.util.List;

import ci.mfpma.dq.entites.Notification;

public interface NotificationService {
	
	List<Notification> getAll();
	
	Notification save(Notification notification);
	
	Notification getById(Long notificationId);
	
	void deleteById(Long notificationId);
}
