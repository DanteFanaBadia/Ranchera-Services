package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import com.intuit.ipp.data.Payment;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PaymentController extends BaseController {

    private static final Logger logger = Logger.getLogger(InvoiceController.class);

    @RequestMapping(value = "/protected/payments", method = RequestMethod.GET)
    public ResponseEntity<List<Payment>> get(){
        String query = "Select * From Payment";
        return new ResponseEntity<>((List<Payment>)getQbHelper().executeSQL(query), HttpStatus.OK);
    }
}
