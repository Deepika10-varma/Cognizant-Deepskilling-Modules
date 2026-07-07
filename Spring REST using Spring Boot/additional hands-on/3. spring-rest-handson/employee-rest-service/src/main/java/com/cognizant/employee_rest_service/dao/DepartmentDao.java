package com.cognizant.employee_rest_service.dao;

import java.util.ArrayList;
import java.util.LinkedHashMap;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import com.cognizant.employee_rest_service.model.Department;
import com.cognizant.employee_rest_service.model.Employee;

@Repository
public class DepartmentDao {

    private static ArrayList<Department> DEPARTMENT_LIST;

    @SuppressWarnings("unchecked")
    public DepartmentDao() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("employee.xml");

        ArrayList<Employee> employees =
                (ArrayList<Employee>) context.getBean("employeeList");

        LinkedHashMap<Integer, Department> map = new LinkedHashMap<>();

        for (Employee employee : employees) {
            Department department = employee.getDepartment();
            map.put(department.getId(), department);
        }

        DEPARTMENT_LIST = new ArrayList<>(map.values());
    }

    public ArrayList<Department> getAllDepartments() {
        return DEPARTMENT_LIST;
    }
}