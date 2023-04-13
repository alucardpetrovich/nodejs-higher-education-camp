# :house: Homework 5

1. Add new functionality to your API from previous homework.
   
2. Add to the User model field password and store it Encrypted with salt. Should provide migration for updating db with new field.

3. Add endpoints for user for login with return JWT token if user with such password and email exist.

4. Add middleware that will validate JWT token and give access to the endpoint only if token is valid and cover all endpoints except login and user create.
   
5. optional task: implement an endpoint for logout with will invalidate token somehow.
   
Notes:

- do not use special library for auth like `passport`
- implement login and Authorization for api
- store password secure with salt and encrypted
- JWT should be extracted from header `Authorization:Bearer <JWTtoken>`

### Useful links:

[JWT](https://jwt.io/introduction)

[Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)

[Password salt](https://en.wikipedia.org/wiki/Salt_(cryptography))

[Node crypto library](https://nodejs.org/api/crypto.html)
