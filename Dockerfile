FROM ubuntu:18.04 as os

ADD . /opt

WORKDIR /opt

USER root

RUN apt-get update  && \
    apt-get install --assume-yes bash git default-jdk npm

RUN npm install -g @angular/cli

RUN ./gradlew bootJar

FROM openjdk:8-jre-alpine

COPY --from=os /opt/ranchera-services/build/libs/ranchera-app.jar /app.jar

EXPOSE 80

ENV JAVA_OPTS=""

ENTRYPOINT ["sh", "-c","java -Dspring.profiles.active=default -Djava.security.egd=file:/dev/./urandom $JAVA_OPTS -jar /app.jar"]
