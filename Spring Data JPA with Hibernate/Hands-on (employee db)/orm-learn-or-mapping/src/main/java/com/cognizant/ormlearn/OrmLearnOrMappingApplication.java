package com.cognizant.ormlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import java.math.BigDecimal;
import java.util.List;
import com.cognizant.ormlearn.model.*;
import com.cognizant.ormlearn.service.*;


@SpringBootApplication
public class OrmLearnOrMappingApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnOrMappingApplication.class);

    private static EmployeeService employeeService;
    
    private static DepartmentService departmentService;

    public static void main(String[] args) {
    	
    	ApplicationContext context =
    	        SpringApplication.run(OrmLearnOrMappingApplication.class, args);

    	LOGGER.info("Inside main");

    	employeeService = context.getBean(EmployeeService.class);
    	departmentService = context.getBean(DepartmentService.class);

//    	testGetEmployee();
//
//    	testGetDepartment();
    	
//    	testGetEmployeeSkills();
    	
//    	testHQLQueries();
//
    	testNativeQuery();
    }

    private static void testGetEmployee() {

        LOGGER.info("Start");

        Employee employee = employeeService.getEmployee(1);

        LOGGER.debug("Employee={}", employee);

        LOGGER.info("End");
    }
    
    private static void testGetDepartment() {

        LOGGER.info("Start Department Test");

        Department department = departmentService.getDepartment(2);

        LOGGER.debug("Department={}", department);

        LOGGER.debug("Employees={}", department.getEmployeeList());

        LOGGER.info("End Department Test");
    }
    
    private static void testGetEmployeeSkills() {

        LOGGER.info("Start Employee Skills Test");

        Employee employee = employeeService.getEmployeeWithSkills(1);

        LOGGER.debug("Employee={}", employee);

        LOGGER.debug("Skills={}", employee.getSkillList());

        LOGGER.info("End Employee Skills Test");
    }
    
    private static void testHQLQueries() {

        LOGGER.info("========== HQL DEMO ==========");

        List<Employee> employees = employeeService.getAllEmployeesHQL();

        LOGGER.debug("All Employees = {}", employees);

        List<Employee> salaryEmployees =
                employeeService.getEmployeesBySalary(new BigDecimal("60000"));

        LOGGER.debug("Salary > 60000 = {}", salaryEmployees);

    }
    
    private static void testNativeQuery() {

        LOGGER.info("========== NATIVE QUERY DEMO ==========");

        List<Employee> employees =
                employeeService.getAllEmployeesNative();

        LOGGER.debug("Native Employees = {}", employees);

    }
}