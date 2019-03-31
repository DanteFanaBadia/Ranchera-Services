package ado.edu.pucmm.rancheraservices.auth;

import ado.edu.pucmm.rancheraservices.service.AuthenticationService;
import com.intuit.ipp.data.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static ado.edu.pucmm.rancheraservices.auth.SecurityConfiguration.DEFAULT_ROLE;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    public AuthenticationService authenticationService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String name = authentication.getName();
        String password = authentication.getCredentials().toString();

        Employee employee = authenticationService.getEmployee(name, password);

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(DEFAULT_ROLE)); // description is a string


        if (employee != null) {
            return new UsernamePasswordAuthenticationToken(name, password, authorities);
        } else {
            return null;
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
