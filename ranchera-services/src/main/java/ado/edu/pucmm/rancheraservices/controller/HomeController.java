package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class HomeController extends BaseController {

    private static final Logger logger = Logger.getLogger(HomeController.class);

    @RequestMapping(value = "/")
    public RedirectView home() {
        return new RedirectView("/index.html");
    }
}
