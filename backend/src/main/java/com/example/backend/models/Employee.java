package com.example.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Employee
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String address;
    
    public Employee(String name, String email, String address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }

    
}