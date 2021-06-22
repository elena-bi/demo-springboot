package com.codecool.springdemo.controller;

import com.codecool.springdemo.model.Message;
import com.codecool.springdemo.repositories.MessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
public class HelloWorldController {
    private String helloWorld;// could use a class for it
    private Logger logger;

    private MessageRepository messageRepository;

    @Autowired
    public HelloWorldController(@Value("${helloWorldMessage}")
                                String helloWorld,

                                MessageRepository messageRepository) {
        this.helloWorld = helloWorld;
        this.messageRepository = messageRepository;
        this.logger = LoggerFactory.getLogger(this.getClass());
    }

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
