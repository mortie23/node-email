#!/usr/local/bin/node

/**
 * Author: Christopher Mortimer
 * Date:   2020-11-22
 * Desc:   Script to send an email
 */
var nodemailer = require('nodemailer');
require('dotenv').config()

useremail = process.env.useremail;
userpassword = process.env.userpassword;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: useremail,
    pass: userpassword
  }
});

var mailOptions = {
  from: useremail,
  to: to.person@domain.com,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

