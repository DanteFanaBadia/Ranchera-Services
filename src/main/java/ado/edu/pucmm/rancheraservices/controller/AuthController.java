package ado.edu.pucmm.rancheraservices.controller;

import java.util.ArrayList;
import java.util.List;

import ado.edu.pucmm.rancheraservices.controller.base.BaseController;
import ado.edu.pucmm.rancheraservices.domain.User;
import ado.edu.pucmm.rancheraservices.service.AuthenticationService;
import com.intuit.ipp.data.Employee;
import com.intuit.oauth2.client.OAuth2PlatformClient;
import com.intuit.oauth2.data.BearerTokenResponse;
import com.intuit.oauth2.exception.OAuthException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.intuit.oauth2.config.OAuth2Config;
import com.intuit.oauth2.config.Scope;

/**
 * @author dfana
 *
 */
@RestController
public class AuthController extends BaseController {

	private static final Logger logger = Logger.getLogger(AuthController.class);

	@Autowired
	private AuthenticationService authenticationService;

	@RequestMapping(value = "/connect-to-erp", method = RequestMethod.GET)
	public ResponseEntity<String> connectToQuickBookOnline() {
		OAuth2Config oauth2Config = getQbHelper().getAuth2PlatformClient().getOAuth2Config();
		String redirectUri = getQbHelper().getAuth2PlatformClient().getPropertyValue("OAuth2AppRedirectUri");
		String csrf = oauth2Config.generateCSRFToken();
		try {
			List<Scope> scopes = new ArrayList<>();
			scopes.add(Scope.Accounting);
			return new ResponseEntity<>(oauth2Config.prepareUrl(scopes, redirectUri, csrf), HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Exception calling connectToQuickbooks ", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/oauth-2-redirect")
	public ResponseEntity callBackFromOAuth(@RequestParam("code") String authCode,
								  @RequestParam("state") String state,
								  @RequestParam(value = "realmId", required = false) String realmId) {
		try {
			OAuth2PlatformClient client  = getQbHelper().getAuth2PlatformClient().getOAuth2PlatformClient();
			BearerTokenResponse bearerTokenResponse = client
					.retrieveBearerTokens(authCode, getQbHelper().getAuth2PlatformClient().getPropertyValue("OAuth2AppRedirectUri"));
			getQbHelper().getAuth2PlatformClient().setToken(bearerTokenResponse);
			logger.info(bearerTokenResponse);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (OAuthException e) {
			logger.error("Exception in callback handler ", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity login(@RequestBody User user){
		try{
			Employee employee = authenticationService.getEmployee(user.getUsername(), user.getPassword());
			if(employee != null)
				return new ResponseEntity(HttpStatus.OK);
			else
				return new ResponseEntity(HttpStatus.NOT_FOUND);
		}catch (Exception e){
			logger.error("Exception in callback handler ", e);
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
