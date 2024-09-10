import { forwardRef, Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmailEntity } from './out/email-entity';
import { ServicesOut } from './out';
import { SaveEmailController } from './in/web/save-email.controller';

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    SequelizeModule.forFeature([EmailEntity]),
  ],
  providers: [...ServicesOut],
  exports: [...ServicesOut],
  controllers: [SaveEmailController],
})
export class AdapterModule {}
