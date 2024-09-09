# Simple CRUD using Node.js

## Dependencies
- `body-parser`
- `dotenv`
- `express`
- `express-validator`
- `joi`
- `mysql2`
- `nodemon`
- `sequelize`
- `sequelize-cli`

## Instalasi

**Clone repository**
   ```
   git clone https://github.com/husainrizaldy/simple-express-api
   cd simple-express-api
   ```
   
**Install dependencies**
   ```
   npm install
   ```
**Config .env file**

Create a .env file in the root of your project and add the following :
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourPassword
   DB_NAME=yourDbName
   DB_PORT=3306
   DB_DIALECT='mysql'
   ```
You can use `.env.example` as a reference for the required environment variables.

**Run migrations and seeders**

Ensure that you have created a database in your MySQL server.

```
npm run db:migrate
npm run db:seed
```

**Run the application**
   ```
   npm run api-service
   ```