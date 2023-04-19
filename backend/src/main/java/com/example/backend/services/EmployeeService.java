package com.example.backend.services;

import java.util.List;

import com.example.backend.models.Employee;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee getSingleEmployee(int id);
    Employee createEmployee(Employee employee);
    Employee updateEmployee(int id, Employee employee);
    void deleteEmployee(int id);
}
