package ado.edu.pucmm.rancheraservices.service;

import ado.edu.pucmm.rancheraservices.helper.QBOServiceHelper;
import com.intuit.ipp.data.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationService {

    @Autowired
    private QBOServiceHelper helper;

    public Employee getEmployee(String username, String password){
        String query = "select * from employee";

        List<Employee> employees = (List<Employee>) helper.executeSQL(query);

        Employee employee = employees.stream()
                .filter(x -> password.equals(x.getEmployeeNumber())
                        && username.equals(x.getPrimaryEmailAddr().getAddress()))
                .findAny()
                .orElse(null);
        return employee;
    }
}
