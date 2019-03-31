package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import com.intuit.ipp.data.Invoice;
import com.intuit.ipp.exception.FMSException;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InvoiceController extends BaseController {

    private static final Logger logger = Logger.getLogger(InvoiceController.class);

    @RequestMapping(value = "/protected/invoices", method = RequestMethod.GET)
    public ResponseEntity<List<Invoice>> get(){
        return new ResponseEntity<>((List<Invoice>)getQbHelper().getEntities("select * from invoice"),HttpStatus.OK);
    }

    @RequestMapping(value = "/protected/invoices", method = RequestMethod.POST)
    public ResponseEntity<Object> create(@RequestBody Invoice invoice){
        Invoice savedInvoice = null;
        try {
            savedInvoice = getQbHelper().getDataServices().add(invoice);
            logger.info("Invoice created: " + savedInvoice.getId() + " ::invoice doc num: " + savedInvoice.getDocNumber());
            return new ResponseEntity<>(savedInvoice,HttpStatus.OK);
        } catch (FMSException e) {
            logger.error("Exception create", e);
            return new ResponseEntity<>(e.getErrorList() ,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
