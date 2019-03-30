package ado.edu.pucmm.rancheraservices.repository;

import ado.edu.pucmm.rancheraservices.domain.Token;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TokenRepository extends CrudRepository<Token, Long> {
    @Query("SELECT t FROM Token t ORDER BY t.created desc")
    List<Token> getAllByCreate();

    List<Token> findAllByOrderByCreatedDesc();

}


