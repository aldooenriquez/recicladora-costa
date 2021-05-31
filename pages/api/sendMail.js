// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "bemarketingmx.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "noreply@bemarketingmx.com", // generated ethereal user
    pass: "12qwaszxE.", // generated ethereal password
  },
});

export default async function handler(req, res) {
  const { firstName, lastName, phoneNumber, email, message } = req.body;
  await transporter
    .sendMail({
      from: "BeMarketing 👻 <noreply@bemarketingmx.com>",
      to: "NodeMailer <aldoo.enriquez@gmail.com>",
      subject: "Correo de contacto",
      html: `
      <div>
        <p>Nombres: ${firstName}</p>
        <p>Apellidos: ${lastName}</p>
        <p>Telefono: ${phoneNumber} </p>
        <p>Correo: ${email}</p>
        <p>Mensaje: ${message}</p>
      </div>`,
    })
    .then((info) => res.status(201).json({ message: "Message Sent" }))
    .catch((e) => res.status(400).json({ error: e }));
}
