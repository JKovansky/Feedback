import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b3c2ea18d71d9a",
      pass: "ba93f8291cc5d1"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
   async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Jonathan Roque <jonathan.roque@unigranrio.br>',
            subject,
            html: body, 
        });
   }
}