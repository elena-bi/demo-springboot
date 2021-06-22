package com.codecool.springdemo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
public class HelloWorldController {
    private String helloWorld = "Hello World!"; // could use a class for it
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/")
    public String getHelloWorld() {
        return helloWorld;
    }

    @GetMapping("/api/hello")
    public String helloWorldFromApi() {
        return helloWorld + " from Spring API";
    }

    @PostMapping("/api/hello")
    public void logPostedMessage(@RequestBody String message) {
        logger.info("Have received from client: " + message);

    }
}
