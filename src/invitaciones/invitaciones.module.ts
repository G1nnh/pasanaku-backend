import { Module } from '@nestjs/common';
import { InvitacionesService } from './invitaciones.service';
import { InvitacionesController } from './invitaciones.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailsModule } from 'src/mails/mails.module';

@Module({
  controllers: [InvitacionesController],
  providers: [InvitacionesService],
  imports: [PrismaModule, MailsModule]
})
export class InvitacionesModule {}
