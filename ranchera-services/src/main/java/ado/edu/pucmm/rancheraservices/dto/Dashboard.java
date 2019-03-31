package ado.edu.pucmm.rancheraservices.dto;

import com.intuit.ipp.data.Customer;
import com.intuit.ipp.data.Invoice;
import com.intuit.ipp.data.Payment;

import java.util.List;

public class Dashboard {

    public int clientsCount;
    public int invoicesCount;
    public int paymentNumber;

    public List<Invoice> lastedOrders;
    public List<Payment> lastedPayments;
    public List<Customer> lastedClients;
}
