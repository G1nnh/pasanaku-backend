import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myTwilioNumber = process.env.TWILIO_PHONE_NUMBER;
const userPhoneNumber = process.env.USER_PHONE_NUMBER;

const client = require('twilio')(accountSid, authToken);

@Injectable()
export class MailsService {
  
  constructor(
    private mailerService: MailerService
  ) { }

  async sendInviteMail(user: string, email: string) {
    let infoMail: any;
    try {
      const url = "https://drive.google.com/drive/folders/1B0gg719YmfHvxvy6GNQxnVVqi2W4Q9Vu?usp=drive_link";
      infoMail = await this.mailerService.sendMail({
        to: email,
        subject: 'Invitación al juego pasanaku',
        template: './invitacion', // La extension `.hbs` se agrega automaticamente.
        context: {
          name: user,
          url
        },
      });

      console.log('Reporte del email:');
      //Manejo de errores si los correos no son aceptados.
      if (infoMail.accepted.length === 0) {
        console.error('Error: No se aceptó la dirección de correo electronico: ', email);
      } else {
        console.log('Correo electronico aceptado. ');
      }

      // Manejo de la respuesta específica del servidor.
      const responseParts = infoMail.response.split(' ');
      const statusCode = responseParts[0];
      const statusMessage = responseParts[1] + ' ' + responseParts[2];
      console.log('---------------------------------------------------')
      console.log('Respuesta del servidor:', statusCode, statusMessage);
      console.log('---------------------------------------------------')

      if (statusCode === '250' && statusMessage === '2.0.0 OK') {
        console.log('El mensaje fue entregado correctamente al servidor de correo.');
      } else {
        console.error('Error en la respuesta del servidor:', statusMessage);
      }

      //Manejo de errores si excede el tamaño del mensaje.
      if (infoMail.messageSize > 35882577) {
        console.error('Error: El mensaje excede el tamaño permitido.');
      }
      return infoMail;
    } catch (error) {
      console.error('Error de conexión al servidor de correo: ', error.message);
    }
  }

  async sendInviteWhatsapp(cellphone: string, name: string) {
    try {
      const message = await client.messages.create({
        body: 'Hola '+name+', haz sido invitado a una partida de PASANAKU-APP. Si no tienes la app, puedes obtenerlo ingresando al siguiente link. https://drive.google.com/file/d/10lBHx0iKs80a8RmNy43ym69YMJ2ByXAK/view?usp=sharing',
        from: 'whatsapp:'+myTwilioNumber,
        to: 'whatsapp:'+cellphone
      });
      console.log('Mensaje enviado: ', message.sid);
      return message;
    } catch (error) {
      console.error('Error al enviar el mensaje: ', error.message);
    }
  }
}
