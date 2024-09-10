import { Provider } from '@nestjs/common';
import { EmailPersistenceAdapter } from './email-persistence.adapter';
import { EmailPersistencePort } from 'src/email/application/ports/out/email.persistence.port';
import { EmailMapper } from './email-mapper';

export const ServicesOut: Provider[] = [
  {
    provide: EmailPersistencePort,
    useClass: EmailPersistenceAdapter,
  },
  EmailMapper,
];
