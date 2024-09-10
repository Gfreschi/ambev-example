import { Provider } from '@nestjs/common';
import { SaveEmailService } from './save-email.service';
import { SaveEmailUseCase } from '../ports/in/save-email.use-case';

export const Services: Provider[] = [
  {
    provide: SaveEmailUseCase,
    useClass: SaveEmailService,
  },
];
