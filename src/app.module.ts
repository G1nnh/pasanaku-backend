import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { RolesModule } from './roles/roles.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { JuegosModule } from './juegos/juegos.module';
import { MailsModule } from './mails/mails.module';
import { ConfigModule } from '@nestjs/config';
import { EstadosModule } from './estados/estados.module';
import { InvitacionesModule } from './invitaciones/invitaciones.module';
import { ParticipantesModule } from './participantes/participantes.module';

@Module({
  imports: [PrismaModule, UsuariosModule, RolesModule, CuentasModule, JuegosModule, JugadoresModule, MailsModule,ConfigModule.forRoot({
    isGlobal: true,
  }), EstadosModule, InvitacionesModule, ParticipantesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
