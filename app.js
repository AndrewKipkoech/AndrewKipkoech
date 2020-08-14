const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
// body-parser to parse the data from the contact form
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.post('/contact', (req,res)=>{
  //instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
      user:GMAIL_USER,
      pass: GMAIL_PASS
    }
  })
  //specifying what the email will look like
  const mailOpts = {
    from: 'Your sender info here', //ignored by gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at andrewkipkoech.com',
    text: '${req.body.name} (${req.body.email}) says: ${req.body.message}'
  }
  //transport the email
  smtpTrans.sendMail(mailOpts,(error, response) =>{
    if(error){
      console.log('An error occured somewhere')
    }else{
      console.log('Email sent successfully')
    }
  })
});