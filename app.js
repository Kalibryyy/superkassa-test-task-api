const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routers = require('./routes/index.js');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/superkassa', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const app = express();
const { PORT = 3001 } = process.env;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routers);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

