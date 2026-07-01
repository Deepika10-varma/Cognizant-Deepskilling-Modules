package com.cognizant.ormlearn.service;
import java.util.Optional;
import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public Employee getEmployee(int id) {

        Optional<Employee> employee =
                employeeRepository.findById(id);

        return employee.orElse(null);
    }
    
    @Transactional
    public Employee getEmployeeWithSkills(int id) {

        return employeeRepository.findById(id).orElse(null);

    }
    
    @Transactional(readOnly = true)
    public List<Employee> getAllEmployeesHQL() {
        return employeeRepository.getAllEmployeesHQL();
    }

    @Transactional(readOnly = true)
    public List<Employee> getEmployeesBySalary(BigDecimal salary) {
        return employeeRepository.getEmployeesBySalary(salary);
    }

    @Transactional(readOnly = true)
    public List<Employee> getAllEmployeesNative() {
        return employeeRepository.getAllEmployeesNative();
    }

}