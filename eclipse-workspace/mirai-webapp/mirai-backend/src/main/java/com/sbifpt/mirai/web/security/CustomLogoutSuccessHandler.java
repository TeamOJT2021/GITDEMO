package com.sbifpt.mirai.web.security;

import java.io.IOException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomLogoutSuccessHandler extends HttpStatusReturningLogoutSuccessHandler {

	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException {
		for (Cookie cookie : request.getCookies()) {
			String cookieName = cookie.getName();
			System.err.println("Delete cookie: " + cookieName);
			Cookie cookieToDelete = new Cookie(cookieName, null);
			cookieToDelete.setMaxAge(0);
			response.addCookie(cookieToDelete);
		}
		super.onLogoutSuccess(request, response, authentication);
	}

	

}
