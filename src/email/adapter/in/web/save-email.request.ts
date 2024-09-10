import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { SaveEmailCommand } from 'src/email/application/ports/in/save-email.command';

export class SaveEmailRequest {
  @Expose()
  @IsNotEmpty()
  readonly recipient_email: string;

  @Expose()
  @IsNotEmpty()
  readonly body: string;

  toCommand(): SaveEmailCommand {
    return new SaveEmailCommand(this.recipient_email, this.body);
  }
}
