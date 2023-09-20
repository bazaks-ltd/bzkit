import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

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
}
