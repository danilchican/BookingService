package com.bookingservice.service;

import org.springframework.data.domain.Page;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public interface IBaseService<IN, OUT, PK extends Serializable> {
    OUT create(IN in);
    Optional<OUT> findOne(PK pk);
    List<OUT> findAll();
    Page<OUT> findPage(Integer page, Integer size);
    Optional<OUT> update(PK pk, IN in);
    Optional<OUT> delete(PK pk);
}
