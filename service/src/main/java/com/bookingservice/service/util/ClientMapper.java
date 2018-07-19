package com.bookingservice.service.util;

import com.bookingservice.model.dto.ClientReqDto;
import com.bookingservice.model.dto.ClientRespDto;
import com.bookingservice.model.domain.Client;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClientMapper {
    ClientRespDto clientToDto(Client client);
    Client dtoToClient(ClientReqDto clientReqDto);
}
