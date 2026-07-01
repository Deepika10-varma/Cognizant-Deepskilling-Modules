package com.cognizant.ormlearn.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // ---------------- HQL ----------------

    @Query("FROM Employee")
    List<Employee> getAllEmployeesHQL();

    @Query("FROM Employee e WHERE e.salary > :salary")
    List<Employee> getEmployeesBySalary(@Param("salary") BigDecimal salary);

    // ---------------- Native SQL ----------------

    @Query(value = "SELECT * FROM employee", nativeQuery = true)
    List<Employee> getAllEmployeesNative();

}