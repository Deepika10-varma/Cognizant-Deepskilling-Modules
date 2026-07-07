package com.cognizant.spring_learn;


import org.springframework.boot.SpringApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
	
	private static final Logger LOGGER =
	        LoggerFactory.getLogger(SpringLearnApplication.class);
	
	private static void displayDate() {

	    ApplicationContext context =
	            new ClassPathXmlApplicationContext("date-format.xml");

	    SimpleDateFormat format =
	            context.getBean("dateFormat", SimpleDateFormat.class);

	    try {

	        Date date = format.parse("31/12/2018");

	        System.out.println(date);

	    } catch (Exception e) {

	        e.printStackTrace();

	    }

	}

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		LOGGER.info("Inside main");
		
		displayDate();
	}

}
