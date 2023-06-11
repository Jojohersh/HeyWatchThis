const express = require('express');
const sequelize = require('./utils/connectDB');


const app = express();
const port = 8080

const indexRouter = require('./controllers/index.js');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});