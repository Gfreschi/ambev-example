import { Injectable } from '@nestjs/common';
import { Email } from 'src/email/domain/email';
import { EmailEntity } from './email-entity';

@Injectable()
export class EmailMapper {
  toEntity(email: Email): EmailEntity {
    return EmailEntity.build({
      recipient_email: email.recipient_email,
      body: email.body,
    });
  }
}
