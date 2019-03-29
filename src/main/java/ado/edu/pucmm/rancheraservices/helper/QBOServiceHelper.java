package ado.edu.pucmm.rancheraservices.helper;

import java.util.List;

import ado.edu.pucmm.rancheraservices.client.OAuth2PlatformClientFactory;
import com.intuit.ipp.services.ReportService;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intuit.ipp.core.Context;
import com.intuit.ipp.core.IEntity;
import com.intuit.ipp.core.ServiceType;
import com.intuit.ipp.data.Error;
import com.intuit.ipp.exception.FMSException;
import com.intuit.ipp.exception.InvalidTokenException;
import com.intuit.ipp.security.OAuth2Authorizer;
import com.intuit.ipp.services.DataService;
import com.intuit.ipp.services.QueryResult;
import com.intuit.ipp.util.Config;
import com.intuit.oauth2.client.OAuth2PlatformClient;
import com.intuit.oauth2.data.BearerTokenResponse;
import com.intuit.oauth2.exception.OAuthException;

@Service
public class QBOServiceHelper {
	
	private static final Logger logger = Logger.getLogger(QBOServiceHelper.class);

	private static final String companyId = "123146326716179";

	private OAuth2PlatformClientFactory auth2PlatformClient;

	public OAuth2PlatformClientFactory getAuth2PlatformClient(){
		return auth2PlatformClient;
	}

	@Autowired
	public void setAuth2PlatformClient(OAuth2PlatformClientFactory auth2PlatformClient){
		this.auth2PlatformClient = auth2PlatformClient;
	}

	public DataService getDataService(String accessToken) throws FMSException {
		return new DataService(getContext(accessToken));
	}

	public ReportService getReportService(String accessToken) throws FMSException {
		return new ReportService(getContext(accessToken));
	}

	private Context getContext(String accessToken) throws FMSException {
		String url = auth2PlatformClient.getPropertyValue("IntuitAccountingAPIHost") + "/v3/company";
		Config.setProperty(Config.BASE_URL_QBO, url);
		OAuth2Authorizer oauth = new OAuth2Authorizer(accessToken);
		Context context = new Context(oauth, ServiceType.QBO, companyId);
		return context;
	}

	public List<? extends IEntity> queryData(String realmId, String accessToken, String refreshToken, String sql) {

    	if (StringUtils.isEmpty(realmId))
    		logger.error("Relam id is null ");
    	
    	try {
    		DataService service = getDataService(accessToken);
    		QueryResult queryResult = service.executeQuery(sql);
			return queryResult.getEntities();
		} catch (InvalidTokenException e) {
			logger.error("Error while calling executeQuery :: " + e.getMessage());
			logger.info("received 401 during companyinfo call, refreshing tokens now");

			OAuth2PlatformClient client  = auth2PlatformClient.getOAuth2PlatformClient();

			try {
				logger.info("calling companyinfo using new tokens");

				BearerTokenResponse bearerTokenResponse = client.refreshToken(refreshToken);
				DataService service = getDataService(accessToken);
				QueryResult queryResult = service.executeQuery(sql);
				return queryResult.getEntities();

			} catch (OAuthException e1) {
				logger.error("Error while calling bearer token :: " + e.getMessage());

			} catch (FMSException e1) {
				logger.error("Error while calling company currency :: " + e.getMessage());
			}

		} catch (FMSException e) {
			List<Error> list = e.getErrorList();
			list.forEach(error -> logger.error("Error while calling executeQuery :: " + error.getMessage()));
		}
		return null;
    }

	public DataService getDataServices(){
		DataService service = null;
		try {
			service = this.getDataService(getAuth2PlatformClient().getToken().getAccessToken());
			return service;
		} catch (FMSException e) {
			logger.error("Exception getDataServices", e);
		}
		return null;
	}

	protected ReportService getReportService(){
		ReportService service = null;
		try {
			service = this.getReportService("eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..S8RvnBJ8LHQiXyLpekPBhw.lxLTNBBlhcL5KFfk_gIsf2Ylpo2xd6h-KeSaExTtfgESKox2AcsnmNWj78v8fOsf0Pk1mCnmXYu0hWMOdBCrVdgC-CmryvrCOwcg_H_md9l6A9ns8YW8JaugwWbwVIWXRAWEZEUx3NY7imVGWOGD52BoKRFgIk6ivaaVoTadPJgn6ofRm4gErpDXt4f5EST0B4yR6YqMOUVev4xNT0MsujqJEF_TBJa8VqZBdgUYG8hjzFmxCYA2JyaXIOTwVhO-KOPzU1uB7nRzpC1uqO4wW6-PD_AEABNK2Ui-iiG038YtxHc2_wn4X76MoLVQ1RALaXIJStydgO3jVw67qhUU7w_x0YZDQLbiD9HDJ6XwSjcthM1PISC3_mXm6bx5r5Ac9EpqDuOU_P7Ri22vihF8lbBdY68d4d0hvHvBpb5FplOA2izQ2sEmmeJGHi5X7euAmLhCPLMcoS40lYUp3wTQK6bmEEGcs1z_PPq_zADOV9rjuCN2J-gcGm4zaNP2VqxcKIivzxk5I5zf533J87M579KAbTvYybtXR4PwYdSjZduqxJ3QwFvxyNeRCqDlZbVCCQvsnktb2Go-kIF5YlU49qwKcLIMvYIX_5amRgHIEXLfTo79tjFGgSu2XIXCkgshmD84N3lx8Q5TQsa3Hl_RcFsZscqr-iro2dB5utIbcF5PxN6w_nNM9sdzGh_MKYxg.6J0Te6PEMZAhXOa9pVoI5Q");
			return service;
		} catch (FMSException e) {
			logger.error("Exception getReportService", e);
		}
		return null;
	}

	public Object executeSQL(String sql){
		QueryResult queryResult = null;
		try {
			queryResult = getDataServices().executeQuery(sql);
		} catch (FMSException e) {
			logger.error("Exception executeSQL", e);
		}
		return queryResult.getEntities();
	}

}
