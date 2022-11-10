# Eccomerce Backend

This application uses the sequelize ORM to perform CRUD operations.
The routes were run using expressjs. In future development these routes will be used for an actual application
as opposed to just showing the routes work.


## Authors

- https://github.com/Damiandlg


## Features

- Categories CRUD
- Tags CRUD
- Products CRUD


## Installation

```bash
  npm install sequelize
  npm install express
  npm install mysql2
```
    
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Running Tests

Tests ran in Insomnia




GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database