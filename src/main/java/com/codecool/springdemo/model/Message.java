package com.codecool.springdemo.model;


import javax.persistence.*;

@Entity
@Table(name="Messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String value;

    public Message(Long id, String value) {
        this.id = id;
        this.value = value;
    }

    public Message() {
        this.value = "";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
