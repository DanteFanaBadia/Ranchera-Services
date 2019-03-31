package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import com.intuit.ipp.data.Item;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController extends BaseController {

    private static final Logger logger = Logger.getLogger(ItemController.class);

    @RequestMapping(value = "/protected/items", method = RequestMethod.GET)
    public ResponseEntity<List<Item>> get(){
        return new ResponseEntity<>((List<Item>)getQbHelper().getEntities("select * from item"),HttpStatus.OK);
    }
}
