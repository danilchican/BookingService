package com.bookingservice.model.dto;

import javax.validation.constraints.NotNull;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class ClientReqDto {
    @NotNull
    private String email;
//    @NotNull
    private String phoneNumber;
//    @NotNull
    private String firstName;
//    @NotNull
    private String lastName;

    public ClientReqDto() {
    }

    public ClientReqDto(@NotNull String email, String phoneNumber,
                        String firstName, String lastName) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "ClientReqDto{" +
                "email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
