const express = require('express')
const app = new express()
const PORT = process.env.PORT 

const nodemailer = require('nodemailer');
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: process.env.USER,
  to: process.env.CLIENT,
  subject: 'Sending Email using nodemailer',
  text: 'Avinash P E34 Batch'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent Successfully ' + info.response);
  }
});


app.listen(PORT, (req, res)=>{
  console.log(`Server running on ${PORT}`)
})

