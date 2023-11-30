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

export const enviarEmail = async (req, res) => {
    try {
        // Obtener la información del correo electrónico del objeto `req`
        const from = '"EnelSotillo"<enelsotillo@gmail.com>';
        const to = "enelsotillo@gmail.com";
        const subject = "Bienvenido";
        const text = "Bienvenido administrator de correo";
        const html = "Bienvenido al correo";

        // Enviar el correo electrónico
        const info = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });
         // Registrar el ID del mensaje
    console.log(info);
    } catch (error) {
        console.log(error);
        res.json({ mensage: error });
    }

   

    // Devolver una respuesta JSON
    return res.json({ mensaje: "ingreso al correo" });
};