USE ormlearn;

-- Drop tables if they already exist
DROP TABLE IF EXISTS employee_skill;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS skill;
DROP TABLE IF EXISTS department;

-- Department Table
CREATE TABLE department (
    dp_id INT PRIMARY KEY,
    dp_name VARCHAR(50) NOT NULL
);

-- Skill Table
CREATE TABLE skill (
    sk_id INT PRIMARY KEY,
    sk_name VARCHAR(50) NOT NULL
);

-- Employee Table
CREATE TABLE employee (
    em_id INT PRIMARY KEY,
    em_name VARCHAR(50) NOT NULL,
    em_salary DECIMAL(10,2),
    em_permanent BOOLEAN,
    em_date_of_birth DATE,
    em_dp_id INT,
    CONSTRAINT fk_department
        FOREIGN KEY (em_dp_id)
        REFERENCES department(dp_id)
);

-- Employee Skill (Many-to-Many)
CREATE TABLE employee_skill (
    es_em_id INT,
    es_sk_id INT,
    PRIMARY KEY (es_em_id, es_sk_id),
    CONSTRAINT fk_employee
        FOREIGN KEY (es_em_id)
        REFERENCES employee(em_id),

    CONSTRAINT fk_skill
        FOREIGN KEY (es_sk_id)
        REFERENCES skill(sk_id)
);

-- Departments
INSERT INTO department VALUES
(1,'Human Resources'),
(2,'Information Technology'),
(3,'Finance');

-- Skills
INSERT INTO skill VALUES
(1,'Java'),
(2,'Spring Boot'),
(3,'Hibernate'),
(4,'SQL'),
(5,'Python'),
(6,'AWS');

-- Employees
INSERT INTO employee VALUES
(1,'John',55000,TRUE,'1998-02-15',2),
(2,'David',65000,TRUE,'1996-10-20',2),
(3,'Mary',50000,FALSE,'1999-05-14',1),
(4,'Alice',70000,TRUE,'1995-03-11',3),
(5,'Robert',60000,TRUE,'1997-08-22',2);

-- Employee Skills
INSERT INTO employee_skill VALUES
(1,1),
(1,2),
(1,4),

(2,1),
(2,3),
(2,6),

(3,4),
(3,5),

(4,4),
(4,6),

(5,1),
(5,2),
(5,3),
(5,4);