const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const {sendMail} = require("./midleware/mail")

app.get('/',(req,res)=>{
    sendMail();
    res.send("mail sended!");
})


const port = 7000
app.listen(port,()=>{
    console.log(`Server running this Port ${port} `)
})