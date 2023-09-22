import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as paseto from 'paseto';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  public example(): void {
    this.mailerService
      .sendMail({
        to: 'terence.zama@gmail.com', // list of receivers
        from: 'terence@bazaks.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        // html: '<b>welcome</b>', // HTML body content
      })
      .then(() => {
        console.info('cool');
      })
      .catch((e) => {
        console.error(e);
      });
  }

  public async sendVerificationLink(email: String) {
    const payload = {
      email,
    };

    const { sign, verify, encrypt } = paseto.V3;
    const token = await encrypt(payload, process.env.EMAIL_VERIFICATION_LKEY, {
      expiresIn: '6 hours',
    });

    // const result = await verify(token, process.env.EMAIL_VERIFICATION_PKEY);
    return token;
  }
}
