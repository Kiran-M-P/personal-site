---
title: "Getting Started with Spring Boot"
date: 2025-02-15
tags: [java, spring-boot]
excerpt: "A quick guide to bootstrapping your first Spring Boot application and understanding the conventions."
---

Spring Boot has become the go-to framework for building Java applications. Here's a minimal setup to get you going.

## Create a New Project

Use [start.spring.io](https://start.spring.io) or the CLI:

```bash
spring init --dependencies=web my-app
```

## Key Conventions

- **Auto-configuration**: Spring Boot configures your app based on classpath dependencies.
- **Embedded server**: Tomcat runs by default—no separate deployment needed.
- **Application properties**: Use `application.yml` or `application.properties` for configuration.

## Running the App

```bash
./mvnw spring-boot:run
```

Your app will be available at `http://localhost:8080`.

## Next Steps

- Add `spring-boot-starter-data-jpa` for database access
- Use `@RestController` for REST endpoints
- Configure profiles for dev/staging/production

Happy building.
