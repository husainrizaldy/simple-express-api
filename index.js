const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRoutes);

sequelize.authenticate().then(() => {
    console.log('Database connected...');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.log('Error: ' + err);
});

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
