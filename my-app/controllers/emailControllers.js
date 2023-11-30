import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "postmaster@sandbox62f411e556a54cd885abae20538a37d4.mailgun.org",
        pass: "2a8757496a59ae175e55cd872a14d164-30b58138-8856e88b",
    },
});

export const enviarEmail = (req, res) => {
    const url= http://www.jetmore.org/john/code/swaks/files/swaks-20130209.0/swaks;
    try {
    swaks: auth, 
	server: smtp.mailgun.org,
	au: postmaster@YOUR_DOMAIN_NAME ,
	ap: 3kh9umujora5, 
	to: bar@example.com, 
	h-Subject: "Hello", 
	body: 'Testing some Mailgun awesomness!'
    } catch (error) {
        console.log('error: ' + error);
        return res.status(500).json({ error: error });
    }
}