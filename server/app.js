const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);


app.use(express.json());
app.use(require('./router/routes'));
const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
