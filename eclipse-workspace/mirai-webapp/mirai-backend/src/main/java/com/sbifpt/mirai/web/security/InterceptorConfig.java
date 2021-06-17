package com.sbifpt.mirai.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class InterceptorConfig implements WebMvcConfigurer{

	@Autowired
	AuthorizationInterceptorHandler authorizationInterceptorHandler;
	/**
	 * Register interceptor
	 */
	@Override
	public void addInterceptors(InterceptorRegistry interceptorRegistry) {
		System.out.println("Hi my interceptor: " + authorizationInterceptorHandler);
		// adding custom interceptor
//		interceptorRegistry.addInterceptor(authorizationInterceptorHandler);

		interceptorRegistry.addInterceptor(authorizationInterceptorHandler).excludePathPatterns("/api/signin", "/api/signup");;
	}
}
