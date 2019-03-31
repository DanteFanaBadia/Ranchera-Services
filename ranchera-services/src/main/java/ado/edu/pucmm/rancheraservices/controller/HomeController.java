package ado.edu.pucmm.rancheraservices.controller;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import ado.edu.pucmm.rancheraservices.dto.Dashboard;
import ado.edu.pucmm.rancheraservices.helper.QBOServiceHelper;
import com.intuit.ipp.data.Invoice;
import com.intuit.ipp.data.Payment;
import com.intuit.ipp.data.QueryResponse;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController extends BaseController {

    private static final Logger logger = Logger.getLogger(HomeController.class);

    @RequestMapping(value = "/")
    public RedirectView home() {
        return new RedirectView("/index.html");
    }

    @RequestMapping(value = "/protected/dashboard")
    public ResponseEntity<Dashboard> dashboard(){
        Dashboard dashboard = new Dashboard();

        QBOServiceHelper helper = this.getQbHelper();

        try {
            dashboard.lastedOrders = (List<Invoice>) helper.getEntities("select * from Invoice ORDERBY TxnDate MAXRESULTS 10");
            dashboard.lastedPayments = (List<Payment>) helper.getEntities("select * from Payment ORDERBY TxnDate MAXRESULTS 5");

            dashboard.paymentNumber = helper.executeSQL("select COUNT(*) from Invoice").getTotalCount();
            dashboard.invoicesCount = helper.executeSQL("select COUNT(*) from Customer").getTotalCount();
            dashboard.clientsCount = helper.executeSQL("select COUNT(*) from Customer").getTotalCount();

        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            dashboard.lastedOrders = new ArrayList<>();
            dashboard.lastedPayments = new ArrayList<>();
        }

        return new ResponseEntity<>(dashboard, HttpStatus.OK);
    }
}
