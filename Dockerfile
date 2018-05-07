FROM maven:3-alpine

COPY pom.xml pipeline/

COPY src/ pipeline/src/

WORKDIR pipeline/

EXPOSE 8090

ENTRYPOINT [ "java", "-jar", "/pipeline/target/jenkins-pipeline.jar"]
