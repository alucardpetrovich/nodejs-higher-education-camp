# :house: Homework 6

- Create Dockerfile for api and docker-compose.yml for start project (should include api and db)

- Add new field for User entity `approved` boolean default false

- Create separate service trying use Layered architecture patterns.
   - should contain only one endpoint (POST body -> { userId: 'someId' })
   - this endpoint should update user with this id by setting `approved` as true 
   - as response return `204 No Content`
   - create docker file for this service and add it to docker-compose.yml
 
- At main api when endpoint for user creation is called make request in new service after user created


### Useful links:

[Layered architecture API example](https://www.wutsi.com/read/258/implementing-rest-api-with-the-layered-architecture-design-pattern)

[Docker nodejs](https://docs.docker.com/language/nodejs/build-images/)

[docker-compose node + pg](https://codingday.tech/build-node-js-postgresql-with-docker-compose/)
