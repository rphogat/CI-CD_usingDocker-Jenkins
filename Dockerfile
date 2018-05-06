FROM maven:3-alpine

COPY pom.xml pipeline/

COPY src/ pipeline/src/

WORKDIR pipeline/

RUN mvn sonar:sonar -Dsonar.host.url=http://192.168.43.97:9000

EXPOSE 8090

ENTRYPOINT [ "java", "-jar", "/pipeline/target/jenkins-pipeline.jar"]
