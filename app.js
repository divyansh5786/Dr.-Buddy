const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.write("hello every one\n");
//     res.write("you peoples are fool");
//     res.send();
// });


app.use(require('./router/auth'));



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
