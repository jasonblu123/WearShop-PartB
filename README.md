# Wear shop Application

# Description

Full-stack ecommerce application built with MERN stack. This project has two features:

1. Buyers register and browse the marketplace while interacting with products across different categories.
2. Admins control and manage the marketplace items and customer acounts.


## Dependencies

- Nodejs - The runtime environment of the application
- Reactjs - Component based UI library
- MongoDB - NoSQL database
- Expressjs - Framework to handle routes and requests
- Mongoose - MongoDB object modeling tool to model the database schema


### Setup

- MongoDB - create a collection named 'Items' and insert the data in the <code>server/ItemsCollection.js</code> file as a document.
- Create a .env

```
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = mongodb://localhost:27017
```

### Running

- front end
  - <code>cd client</code>
  - <code>npm start</code>
- back end
  - <code>cd server</code>
  - <code>npm run dev</code>


