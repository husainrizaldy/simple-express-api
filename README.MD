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
   ```

**Database**

create a database and tables with the following details :
```
`id` int NOT NULL AUTO_INCREMENT,
`nim` int DEFAULT NULL,
`nama_lengkap` varchar(100) DEFAULT NULL,
`kelas` varchar(20) DEFAULT NULL,
`alamat` text,
`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
`updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`),
UNIQUE KEY `nim_UNIQUE` (`nim`)
```

**Run the application**
   ```
   npm run api-service
   ```