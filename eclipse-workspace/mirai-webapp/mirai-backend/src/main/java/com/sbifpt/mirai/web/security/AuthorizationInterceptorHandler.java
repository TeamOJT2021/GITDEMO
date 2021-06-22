package com.sbifpt.mirai.web.security;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.sbifpt.mirai.web.security.jwt.JwtUtils;
import com.sbifpt.mirai.web.service.UserDetailsServiceImpl;

/**
 * 
 * Block requests and validate tokens return true ? request authorized : access
 * is denied
 * 
 */
@Component
public class AuthorizationInterceptorHandler extends HandlerInterceptorAdapter {

	Logger log = org.slf4j.LoggerFactory.getLogger(this.getClass());

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object object, Exception arg3)
			throws Exception {
		if(arg3 != null) {
			log.info("Exception inside afterCompletion"+ arg3.getMessage());

		}
		log.info("preHandle invoked...{}:{}"+request.getRequestURI(), request.getMethod());

	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object object, ModelAndView model)
			throws Exception {

		log.info("preHandle invoked...{}:{}"+request.getRequestURI(), request.getMethod());


	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object object) throws Exception {
		log.info("preHandle invoked...{}:{}"+request.getRequestURI(), request.getMethod());
		try {
			String jwt = parseJwt(request);
			System.out.println("JWT: " + jwt);
			if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
				System.err.println("Check JWT");
				String username = jwtUtils.getUserNameFromJwtToken(jwt);
				System.err.println("USER NAME: " + username);
				UserDetails userDetails = userDetailsService.loadUserByUsername(username);
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
		} catch (Exception e) {
			System.err.println("Cannot set user authentication: {}");
			e.printStackTrace();
		}
		return true;
	}

	private String parseJwt(HttpServletRequest request) throws JSONException, UnsupportedEncodingException {
		Cookie[] cookies = request.getCookies();

		if (cookies == null) {
			System.out.println("No cookies found");
		} else {
			System.out.println("Number of cookies: " + cookies.length);
			for (Cookie aCookie : cookies) {
				String name = aCookie.getName();
				String value = aCookie.getValue();
				System.err.println("Name: " + name + "Value: " + value);
				JSONObject jsonObject = new JSONObject(URLDecoder.decode(value, "utf8"));
				if (name.equals("COOKIE_BEARER")) {

					String jwtByCookie = jsonObject.getString("accessToken");
					System.err.println("JWT By cookie: " + jwtByCookie);

					return jwtByCookie;
				}

			}
		}

		return null;
	}

}
