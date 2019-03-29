package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import ado.edu.pucmm.rancheraservices.domain.Token;
import ado.edu.pucmm.rancheraservices.repository.TokenRepository;
import com.intuit.ipp.data.Customer;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TokenController extends BaseController {

    @Autowired
    TokenRepository tokenRepository;

    private static final Logger logger = Logger.getLogger(TokenController.class);

    @RequestMapping(value = "/tokens", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Token>> get(){
        return new ResponseEntity<>(tokenRepository.findAll(),HttpStatus.OK);
    }
}
