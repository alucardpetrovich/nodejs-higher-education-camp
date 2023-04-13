# :house: Homework 4

1. Install TypeORM into your project from previos home work, connect it to Postgre DB.
2. Extend the User model to this
  ```
    id: number or uuid
    username: string required unique
    email: string required
    age: number required
    info: string not required
    adress: json { city: string, street: string}
   ```
3. Add model Post with relation OneToMany with User
  ```
  id: uuid or number
  dateCreation: Date required
  title: string required
  text: string required
  ```
4. Create Data Access Layer with Repository/DAO pattern (see materials from presentation)
5. Don't expose TypeORM entities out of repositories. Use Domain models and TypeORM entities separately. Come up with some mapping.
6. Define all tables and relations in project as TypeORM entities
7. Rewrite all api enpoint for useing DB with either QueryBuilder or TypeORM repository methods
8. add endpoint for cretating Post by gettiong userId,title,text
9. add filter and pagination for user list endpoint
  shold filter by this fields
  ```
  age - get all users with such age
  adress.city - get all users with such city
  user.post.title - get all users witch have Post with such title
  ```

10.  Create 3 scripts in package.json

- migration:generate - automatically generates migrations with TypeORM. Example: `$npm run migration:generate NewColumnAdded`
- migration:run - runs all migrations
- migration:revert - reverts last migration

### Useful links:

[TypeORM npm package](https://www.npmjs.com/package/typeorm)

[Connection options](https://typeorm.biunav.com/en/connection-options.html)

[TypeORM entities](https://typeorm.io/#/entities)

[Relations between entities](https://typeorm.io/#/relations)

[Find options (WHERE conditions)](https://typeorm.io/#/find-options)

[Custom repositories (may help you with DAL layer)](https://typeorm.io/#/custom-repository)

[Query builder (a lot of examples here)](https://typeorm.io/#/select-query-builder)

[Migrations](https://typeorm.io/#/migrations)