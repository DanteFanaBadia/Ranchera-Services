package ado.edu.pucmm.rancheraservices.config;

import ado.edu.pucmm.rancheraservices.converter.LocalTokenToRemoteTokenConverter;
import ado.edu.pucmm.rancheraservices.domain.Token;
import ado.edu.pucmm.rancheraservices.helper.QBOServiceHelper;
import ado.edu.pucmm.rancheraservices.repository.TokenRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebMvc
public class Config implements WebMvcConfigurer {
    private static final Logger log = LoggerFactory.getLogger(Config.class);

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
            "classpath:/META-INF/resources/",
            "classpath:/resources/",
            "classpath:/static/",
            "classpath:/public/"
    };

    private String banner = "" +
            " _______                            __         ______                   _                       \n" +
            "|_   __ \\                          [  |      .' ____ \\                 / |_                     \n" +
            "  | |__) |   ,--.   _ .--.   .---.  | |--.   | (___ \\_|  _   __  .--. `| |-'.---.  _ .--..--.   \n" +
            "  |  __ /   `'_\\ : [ `.-. | / /'`\\] | .-. |   _.____`.  [ \\ [  ]( (`\\] | | / /__\\\\[ `.-. .-. |  \n" +
            " _| |  \\ \\_ // | |, | | | | | \\__.  | | | |  | \\____) |  \\ '/ /  `'.'. | |,| \\__., | | | | | |  \n" +
            "|____| |___|\\'-;__/[___||__]'.___.'[___]|__]  \\______.'[\\_:  /  [\\__) )\\__/ '.__.'[___||__||__] \n" +
            "                                                        \\__.' " +
            "";

    private TokenRepository tokenRepository;
    private QBOServiceHelper qboServiceHelper;
    private LocalTokenToRemoteTokenConverter localTokenToRemoteTokenConverter;

    public Config(@Autowired TokenRepository tokenRepository,
                  @Autowired QBOServiceHelper qboServiceHelper,
                  @Autowired LocalTokenToRemoteTokenConverter localTokenToRemoteTokenConverter) {
        this.qboServiceHelper = qboServiceHelper;
        this.tokenRepository = tokenRepository;
        this.localTokenToRemoteTokenConverter = localTokenToRemoteTokenConverter;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void start() {
        System.out.println(banner);
        System.out.println("¯\\_(ツ)_/¯ ---> ʕノ•ᴥ•ʔノ ︵ ┻━┻\n");
        List<Token> tokenList = this.tokenRepository.getAllByCreate();
        if(tokenList.size() >= 1){
            Token token = tokenList.get(0);
            this.qboServiceHelper
                    .getAuth2PlatformClient()
                    .setToken(localTokenToRemoteTokenConverter.convert(token));
        }
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
    }
}