package ado.edu.pucmm.rancheraservices.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Token {

    @Id
    @GeneratedValue
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name="id_token", length = 2000)
    private String idToken;
    @Column(name="refresh_token", length = 2000)
    private String refreshToken;
    @Column(name="access_token", length = 2000)
    private String accessToken;
    @Column(name="token_type", length = 2000)
    private String tokenType;

    private Date created = new Date();

    private Long expiresIn;

    private Long xRefreshTokenExpiresIn;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public Long getXRefreshTokenExpiresIn() {
        return xRefreshTokenExpiresIn;
    }

    public void setXRefreshTokenExpiresIn(Long xRefreshTokenExpiresIn) {
        this.xRefreshTokenExpiresIn = xRefreshTokenExpiresIn;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    @Override
    public String toString() {
        return "Token{" +
                "id=" + id +
                ", idToken='" + idToken + '\'' +
                ", refreshToken='" + refreshToken + '\'' +
                ", accessToken='" + accessToken + '\'' +
                ", tokenType='" + tokenType + '\'' +
                ", expiresIn=" + expiresIn +
                ", xRefreshTokenExpiresIn=" + xRefreshTokenExpiresIn +
                '}';
    }
}
