import { Injectable } from '@nestjs/common';
import { SaveEmailUseCase } from '../ports/in/save-email.use-case';
import { EmailPersistencePort } from '../ports/out/email.persistence.port';
import { SaveEmailCommand } from '../ports/in/save-email.command';
import { Email } from 'src/email/domain/email';

@Injectable()
export class SaveEmailService implements SaveEmailUseCase {
  constructor(private readonly emailPersistencePort: EmailPersistencePort) {}

  async saveEmail(command: SaveEmailCommand): Promise<void> {
    const email = new Email(command.recipient_email, command.body);

    await this.emailPersistencePort.persistEmail(email);
  }
}
