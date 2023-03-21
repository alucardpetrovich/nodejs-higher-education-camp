# :house: Homework 3

0. Create web server using nodejs. This web server should follow REST standards and implement basic CRUD operations for a User entity. This server should also be built with express framework.

Notes:

- use express & typescript
- implement CRUD for a User entity
- should have "create user" endpoint with username as a required parameter
- should have "read user by id" endpoint (only of id and name)
- should have "list users" endpoint (list of ids and names)
- should have "update user by id" endpoint
- do not use any database, store data locally in the memory of the process or in the file-system

### For all of the exercises below you should provide SQL queries solutions in `.sql` files.

1. Write an SQL statement to define tables for the next entities:
   - Concerts (name, duration, description, address, age limit, price)
   - Visitors (email, name, age)
   - Categories (name, description).
   
   Notes:
   
   One concert may be related to different categories.
   
2. Select all users with theirs channels and return next information, sorted by channel's creation date (newer at the top):

   user id, user name, user avatar, channel photo, channel description, channel creation date.
3. Select information about 5 the most liked videos ever.
4. Select videos from subscriptions for user Stephanie Bulger, ordered by publish date (newer at the top) and return next information:

   video id, video title, video preview, video duration, video publish date.
5. Select information of channel with id '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76' and count of its subscribers.
6. Select the most rated (likes and dislikes) top 10 videos starting from the September which has more than 4 likes, sorted by count of likes (the most at the top).
7. Select subscriptions for user Ennis Haestier and return next information:

   channel (user) name, channel (user) avatar, channel photo, channel description, subscription level, subscription date.

   Information should be sorted firstly by subscription level and secondly by subscription date:

   order for subscription levels from top to bottom: vip, follower, fan, standard; subscription date from newer to older.
   

### Useful links:
[Database design](https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5)

[PostgreSQL tutorial](https://www.postgresqltutorial.com)

[SQL joins](https://www.w3schools.com/sql/sql_join.asp)

[Normalization forms](https://www.guru99.com/database-normalization.html)

[Normalization and denormalization](https://techdifferences.com/difference-between-normalization-and-denormalization.html)


