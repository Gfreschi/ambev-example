import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SaveEmailUseCase } from '../../../application/ports/in/save-email.use-case';
import { SaveEmailCommand } from 'src/email/application/ports/in/save-email.command';
import { SaveEmailRequest } from './save-email.request';

@Controller('save-email')
export class SaveEmailController {
  constructor(private readonly saveEmailUseCase: SaveEmailUseCase) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  save(@Body() request: SaveEmailRequest) {
    const command: SaveEmailCommand = request.toCommand();
    return this.saveEmailUseCase.saveEmail(command);
  }
}
