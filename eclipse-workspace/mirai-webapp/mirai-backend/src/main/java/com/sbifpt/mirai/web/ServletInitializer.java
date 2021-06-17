package com.sbifpt.mirai.web;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {
	//Cho phep khoiapo cac thong so cua servlet khi trien khai cac server ben ngoai va cac phuong thuc khac
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(MiraiApplication.class);
	}

}
