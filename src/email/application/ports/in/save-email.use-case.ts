import { SaveEmailCommand } from './save-email.command';

export abstract class SaveEmailUseCase {
  abstract saveEmail(command: SaveEmailCommand): Promise<void>;
}
