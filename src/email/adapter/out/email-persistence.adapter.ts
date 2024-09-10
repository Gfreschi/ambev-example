import { Injectable } from '@nestjs/common';
import { EmailPersistencePort } from 'src/email/application/ports/out/email.persistence.port';
import { EmailMapper } from './email-mapper';
import { Email } from 'src/email/domain/email';
import { EmailEntity } from './email-entity';

@Injectable()
export class EmailPersistenceAdapter implements EmailPersistencePort {
  constructor(private emailMapper: EmailMapper) {}

  async persistEmail(email: Email): Promise<void> {
    const emailEntity: EmailEntity = this.emailMapper.toEntity(email);

    emailEntity.save();
  }
}
