package com.bookingservice.controller;

import com.bookingservice.model.User;
import com.bookingservice.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = "com.bookingservice.repository")
@EntityScan(basePackages = "com.bookingservice.model")
@ComponentScan(basePackages = "com.bookingservice.*")
public class ControllerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ControllerApplication.class, args);
    }

    @Bean
    public CommandLineRunner loadData(UserService userService) {
        return (args) -> {
            userService.addUser(new User("bogdevich96@gmail.com"));
            userService.addUser(new User("bogdevich96@gmail.com"));
            userService.addUser(new User("bogdevich96@gmail.com"));
        };
    }
}
