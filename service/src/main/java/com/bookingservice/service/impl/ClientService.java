package com.bookingservice.service.impl;

import com.bookingservice.model.domain.Client;
import com.bookingservice.model.dto.ClientReqDto;
import com.bookingservice.model.dto.ClientRespDto;
import com.bookingservice.repository.ClientRepository;
import com.bookingservice.service.IClientService;
import com.bookingservice.service.util.ClientMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClientService implements IClientService {

    private ClientRepository clientRepository;
    private ClientMapper clientMapper;

    @Autowired
    public ClientService(
            ClientRepository clientRepository,
            ClientMapper clientMapper) {
        this.clientRepository = clientRepository;
        this.clientMapper = clientMapper;
    }

    @Override
    public ClientRespDto create(final ClientReqDto clientReqDto) {
        return Optional.ofNullable(clientReqDto)
                .map(clientMapper::dtoToClient)
                .map(clientRepository::save)
                .map(clientMapper::clientToDto)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Request client is null"));
    }

    @Override
    public Optional<ClientRespDto> findOne(final Long id) {
        Assert.notNull(id, "Client id is null");
        return clientRepository.findById(id)
                .map(clientMapper::clientToDto);
    }

    @Override
    public List<ClientRespDto> findAll() {
        return clientRepository.findAll()
                .stream().map(clientMapper::clientToDto)
                .collect(Collectors.toList());
    }

    @Override
    public Page<ClientRespDto> findPage(final Integer page, final Integer size) {
        Assert.notNull(page, "Page is null");
        Assert.notNull(size, "Size is null");
        return clientRepository.findAll(PageRequest.of(page, size))
                .map(clientMapper::clientToDto);
    }

    @Override
    public Optional<ClientRespDto> update(final Long id, final ClientReqDto clientReq) {
        Assert.notNull(id, "Client id is null");
        Assert.notNull(clientReq, "Request client is null");
        Client savedClient = null;
        if (clientRepository.existsById(id)) {
            Client client = clientMapper.dtoToClient(clientReq);
            client.setId(id);
            savedClient = clientRepository.save(client);
        }
        return Optional.ofNullable(savedClient).map(clientMapper::clientToDto);
    }

    @Override
    public Optional<ClientRespDto> delete(final Long id) {
        Assert.notNull(id, "Client id is null");
        Optional<ClientRespDto> clientDtoOptional = clientRepository.findById(id)
                .map(clientMapper::clientToDto);
        if (clientDtoOptional.isPresent()) {
            clientRepository.deleteById(id);
        }
        return clientDtoOptional;
    }
}
