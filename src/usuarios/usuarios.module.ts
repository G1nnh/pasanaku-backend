import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailsModule } from 'src/mails/mails.module';
import { JugadoresService } from 'src/jugadores/jugadores.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, JugadoresService],
  imports: [PrismaModule, MailsModule],
  exports: [UsuariosService],
})
export class UsuariosModule {}
