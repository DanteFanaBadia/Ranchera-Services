package ado.edu.pucmm.rancheraservices.client;

import javax.annotation.PostConstruct;

import ado.edu.pucmm.rancheraservices.converter.LocalTokenToRemoteTokenConverter;
import ado.edu.pucmm.rancheraservices.converter.RemoteTokenToLocalTokenConverter;
import ado.edu.pucmm.rancheraservices.repository.TokenRepository;
import com.intuit.oauth2.data.BearerTokenResponse;
import com.intuit.oauth2.exception.OAuthException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.intuit.oauth2.client.OAuth2PlatformClient;
import com.intuit.oauth2.config.Environment;
import com.intuit.oauth2.config.OAuth2Config;

/**
 * 
 * @author dfana
 *
 */
@Service
@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
@PropertySource(value="classpath:/application.properties", ignoreResourceNotFound=true)
public class OAuth2PlatformClientFactory {

	private static final Logger logger = Logger.getLogger(OAuth2PlatformClientFactory.class);

	@Autowired
	private org.springframework.core.env.Environment env;

	@Autowired
	private TokenRepository tokenRepository;

	private RemoteTokenToLocalTokenConverter remoteTokenToLocalTokenConverter;

	private OAuth2PlatformClient client;

	private OAuth2Config oauth2Config;

	private BearerTokenResponse bearerTokenResponse;

	public OAuth2PlatformClientFactory(@Autowired RemoteTokenToLocalTokenConverter remoteTokenToLocalTokenConverter) {
		this.remoteTokenToLocalTokenConverter = remoteTokenToLocalTokenConverter;
	}

	@PostConstruct
	public void init() {
		oauth2Config = new OAuth2Config
				.OAuth2ConfigBuilder(env.getProperty("OAuth2AppClientId"), env.getProperty("OAuth2AppClientSecret"))
				.callDiscoveryAPI(Environment.SANDBOX)
				.buildConfig();
		client  = new OAuth2PlatformClient(oauth2Config);
	}
	
	public OAuth2PlatformClient getOAuth2PlatformClient()  {
		return client;
	}
	
	public OAuth2Config getOAuth2Config()  {
		return oauth2Config;
	}
	
	public String getPropertyValue(String propertyName) {
		return env.getProperty(propertyName);
	}

	private BearerTokenResponse refreshToken(){
		try {
			bearerTokenResponse = client.refreshToken(bearerTokenResponse.getRefreshToken());
			return bearerTokenResponse;
		} catch (OAuthException e) {
			logger.error(e);
		}
		return null;
	}

	public void setToken(BearerTokenResponse bearerTokenResponse){
		this.bearerTokenResponse  = bearerTokenResponse;
		if (bearerTokenResponse != null)
			tokenRepository.save(remoteTokenToLocalTokenConverter.convert(bearerTokenResponse));
	}

	public BearerTokenResponse getToken(){
		if (bearerTokenResponse != null
				&& bearerTokenResponse.getExpiresIn() < System.currentTimeMillis())
			bearerTokenResponse = this.refreshToken();
		return bearerTokenResponse;
	}

}
