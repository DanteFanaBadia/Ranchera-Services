package ado.edu.pucmm.rancheraservices.converter;

import ado.edu.pucmm.rancheraservices.domain.Token;
import com.intuit.oauth2.data.BearerTokenResponse;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class LocalTokenToRemoteTokenConverter implements Converter<Token, BearerTokenResponse> {

    @Override
    public BearerTokenResponse convert(Token source) {
        BearerTokenResponse token = new BearerTokenResponse();
        token.setIdToken(source.getIdToken());
        token.setAccessToken(source.getAccessToken());
        token.setExpiresIn(source.getExpiresIn());
        token.setIdToken(source.getIdToken());
        token.setRefreshToken(source.getRefreshToken());
        token.setXRefreshTokenExpiresIn(source.getXRefreshTokenExpiresIn());
        token.setTokenType(source.getTokenType());
        return token;
    }
}
