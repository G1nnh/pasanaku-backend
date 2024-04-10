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

@Module({
  imports: [PrismaModule, UsuariosModule, RolesModule, CuentasModule, JuegosModule, JugadoresModule, MailsModule,ConfigModule.forRoot({
    isGlobal: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
