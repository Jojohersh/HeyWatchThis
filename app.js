const express = require('express');

const app = express();
const port = 8080

const indexRouter = require('./routes/index.js');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});