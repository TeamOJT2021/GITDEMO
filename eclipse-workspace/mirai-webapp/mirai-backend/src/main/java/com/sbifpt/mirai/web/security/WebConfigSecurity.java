package com.sbifpt.mirai.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.support.OpenSessionInViewFilter;
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sbifpt.mirai.web.security.jwt.AuthEntryPointJwt;
import com.sbifpt.mirai.web.service.UserDetailsServiceImpl;

/**
 * 
 * Configuration security
 * 
 * @Bean set object bean to container(context) necessary!
 */
@Configuration
@EnableWebSecurity
/**
 * 
 * Catch request
 *
 */
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebConfigSecurity extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean(name = BeanIds.AUTHENTICATION_MANAGER)
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Bean
	public OpenEntityManagerInViewFilter openEntityManagerInViewFilter(){
		return new OpenEntityManagerInViewFilter();
	}

	/**
	 * 
	 * Encode password
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	/**
	 * 
	 * Register interceptor to context
	 * 
	 */
	@Bean
	public AuthorizationInterceptorHandler authorizationInterceptor() {
		return new AuthorizationInterceptorHandler();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		/**
		 * cors: Allow api access from 3rd party
		 */
		http.cors()
		.and()
			.csrf().disable()
		/**
		 * Access is denied
		 */
		.exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
		.and()
			/**
			 * do not create session
			 */
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()

				.authorizeRequests()
				.antMatchers("/", "/home", "/login", "/register" ,"/api/signin",  "/api/signup", "/api/auth/all").permitAll()
				.antMatchers("/static/**","/favicon.ico").permitAll()
//				.antMatchers("/api/auth/projects/").hasAnyRole("PROJECTMANAGER", "USER", "ADMIN")



				/**	
				 * Obligator  authorization  
				 */
//				.anyRequest().authenticated()
				;


	}

}
