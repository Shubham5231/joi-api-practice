const express = require('express');
const app = express();
const config = require('./Configurations/config');
const mongoose = require('mongoose');
const bookRouter = require('./Routes/book');

app.use(express.json());
app.use(bookRouter);

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log('Connected to Db....');
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  })
  .catch(() => {
    console.log('Error connecting to db..');
  });
