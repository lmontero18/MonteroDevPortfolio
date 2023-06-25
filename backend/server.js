const express = require("express");
const app = express();
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 5000;

//Middleware de express para usar static files
app.use(express.static('public'));
app.use(express.json());


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post("/", (req, res) =>{
    console.log(req.body)


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'lmonterom879@gmail.com',
            pass: 'bypszbliutbqeiti'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'lmonterom879@gmail.com',
        subject: `Mensaje de  ${req.body.email}:  ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
            res.send('error');

        } else {
            console.log('Email sent: '+ info.response);
            res.send('success')
        }
    })
}) 

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})


