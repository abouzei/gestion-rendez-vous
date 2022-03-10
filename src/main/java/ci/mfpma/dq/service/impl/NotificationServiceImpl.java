package ci.mfpma.dq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.mfpma.dq.entites.Notification;
import ci.mfpma.dq.repository.NotificationRepository;
import ci.mfpma.dq.service.NotificationService;


@Service
public class NotificationServiceImpl implements NotificationService{

	@Autowired
	private NotificationRepository notificationRepository;

	@Override
	public List<Notification> getAll() {
		return notificationRepository.findAll();
	}

	@Override
	public Notification save(Notification notification) {
		return notificationRepository.save(notification);
	}

	@Override
	public Notification getById(Long notificationId) {
	    return notificationRepository.findById(notificationId).get();
	}

	@Override
	public void deleteById(Long notificationId) {
	}
}
