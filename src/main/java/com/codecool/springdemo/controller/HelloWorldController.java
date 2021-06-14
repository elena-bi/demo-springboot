package com.codecool.springdemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    private String helloWorld = "Hello World!"; // could use a class for it

    @GetMapping("/")
    public String getHelloWorld() {
        return helloWorld;
    }
}
