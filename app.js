const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routers = require('./routes/index.js');
const cors = require('cors');
const { PORT, DB_URL } = require('./configs');

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routers);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

