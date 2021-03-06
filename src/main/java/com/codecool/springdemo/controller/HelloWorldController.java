package com.codecool.springdemo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:3000")
@RestController
public class HelloWorldController {
    private String helloWorld = "Hello World!"; // could use a class for it

    @GetMapping("/")
    public String getHelloWorld() {
        return helloWorld;
    }

    @GetMapping("/api/hello")
    public String helloWorldFromApi() {
        return helloWorld + " from Spring API";
    }
}
