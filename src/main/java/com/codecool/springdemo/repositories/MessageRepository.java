package com.codecool.springdemo.repositories;

import com.codecool.springdemo.model.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends CrudRepository<Message,Long> {
}
