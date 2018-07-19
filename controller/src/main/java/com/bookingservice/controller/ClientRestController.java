package com.bookingservice.controller;

import com.bookingservice.model.dto.ClientReqDto;
import com.bookingservice.model.dto.ClientRespDto;
import com.bookingservice.service.impl.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 */
@RestController
@CrossOrigin
@RequestMapping(
        value = "/clients",
        produces = MediaType.APPLICATION_JSON_UTF8_VALUE
)
public class ClientRestController
        implements IBaseController<ClientReqDto, ClientRespDto, Long> {

    private ClientService clientService;

    @Autowired
    public ClientRestController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    @Override
    public ResponseEntity<ClientRespDto> create(@RequestBody ClientReqDto clientReq) {
        ClientRespDto clientResp = clientService.create(clientReq);
        return new ResponseEntity<>(clientResp, HttpStatus.CREATED);
    }

    @GetMapping("/{id:[0-9]+}")
    @Override
    public ResponseEntity<ClientRespDto> findOne(@PathVariable Long id) {
        return clientService.findOne(id).map(clientRespDto -> new ResponseEntity<>(
                clientRespDto, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @Override
    public ResponseEntity<List<ClientRespDto>> findAll() {
        List<ClientRespDto> clientRespList = clientService.findAll();
        return new ResponseEntity<>(clientRespList, HttpStatus.OK);
    }

/*    @GetMapping
    @Override
    public ResponseEntity<List<ClientRespDto>> foundPage(
            @RequestParam(value = "page") Integer page,
            @RequestParam(value = "size") Integer size) {
        List<ClientRespDto> clientRespList = clientService.foundPage(page, size)
                .getContent();
        return new ResponseEntity<>(clientRespList, HttpStatus.OK);
    }*/

    @PutMapping("/{id:[0-9]+}")
    @Override
    public ResponseEntity<ClientRespDto> update(
            @PathVariable Long id, @RequestBody ClientReqDto clientReq) {
        return clientService.update(id, clientReq)
                .map(clientResp -> new ResponseEntity<>(clientResp, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id:[0-9]+}")
    @Override
    public ResponseEntity<ClientRespDto> delete(@PathVariable Long id) {
        return clientService.delete(id)
                .map(clientResp -> new ResponseEntity<>(clientResp, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
