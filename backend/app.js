const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

function sendEmail({email, subject, message}) {
    return new Promise ((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'mvoron772@gmail.com',
                pass: 'vvzz sell aegq qnpk'
            }
        })

        const mail_config = {
            from: 'mvoron772@gmail.com',
            to: email,
            subject: subject,
            text: message,
        }

        transporter.sendMail(mail_config, function (err, info) {
            if(err) {
                console.log(err);
                return reject({message: 'An error occurred'})
            }

            return resolve({message: 'Email send successfully'})
        })
    })
}

app.get('/',(req, res) => {
    sendEmail(req.query)
    .then((response) => response.send(response.message))
    .catch((err) => res.status(500).send(err.message));
}) 

app.listen(port, () => {
    console.log(`nodemailer is listening: ${port}`);
})