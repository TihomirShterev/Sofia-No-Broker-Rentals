# Sofia-Property-Rent-With-Angular

SoftUni Angular Project

Run 'npm install' and then 'npx nodemon start' in the REST-API folder to get the server ready. MongoDB is used. Listening on port: 3000.

Run 'npm install' and then 'ng serve' in the Front-End folder to build the app. Listening on port: 4200.


# Base API URL

```https://localhost:3000/api```


# Endpoints:

home
.get / - get home page

user
.post /register - register new user
.get /profile - get user info (accessible only by logged in user)
.get /logout - logout user (accessible only by logged in user)
.post /login - login user

item
.get / - list all items
.post /create - create a new item (accessible only by logged in user)
.get /details/id - get item details (accessible only by logged in user)
