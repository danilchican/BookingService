package com.bookingservice.controller;

import com.bookingservice.model.dto.ClientReqDto;
import com.bookingservice.service.impl.ClientService;
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
    public CommandLineRunner loadData(ClientService clientService) {
        return (args) -> {
            clientService.create(
                    new ClientReqDto(
                            "bogdevich96@gmail.com",
                            "292838788",
                            "Eugene",
                            "Bogdevich"));/*
            clientService.create(new Client("bogdevich96@gmail.com"));
            clientService.create(new Client("bogdevich96@gmail.com"));*/
        };
    }
}
