import { Module } from '@nestjs/common';
import { InvitacionesService } from './invitaciones.service';
import { InvitacionesController } from './invitaciones.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InvitacionesController],
  providers: [InvitacionesService],
  imports: [PrismaModule]
})
export class InvitacionesModule {}
