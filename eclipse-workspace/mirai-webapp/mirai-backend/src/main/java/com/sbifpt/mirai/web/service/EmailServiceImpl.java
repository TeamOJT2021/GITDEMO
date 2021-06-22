package com.sbifpt.mirai.web.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl {

	@Autowired
	private EmailService emailService;

	public void sendMailToActiveAccount(String email, String hashKey) throws MessagingException {

		MimeMessage mess = emailService.getJavaMailSender().createMimeMessage();
		System.err.println("Hash key send mail"+ hashKey);
		String html = "Send Mail <a href='" + hashKey + "'>Confirm</a>";
		mess.setContent(html, "text/html; charset=utf-8");

		MimeMessageHelper helper = new MimeMessageHelper(mess, true);

		helper.setText(html, true);
		helper.setTo(email);
		helper.setSubject("Registration Confirmation");
		emailService.sendMail(mess);
	}
}
