package com.bookingservice.repository;

import com.bookingservice.model.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findClientByEmail(String email);
    Optional<Client> findClientByPhoneNumber(String phoneNumber);
}
