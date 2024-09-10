import { Email } from '../../../domain/email';

export abstract class EmailPersistencePort {
  abstract persistEmail(email: Email): Promise<void>;
}
