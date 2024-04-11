import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { RolesModule } from './roles/roles.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { JuegosModule } from './juegos/juegos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsuariosModule, RolesModule, CuentasModule, JuegosModule, JugadoresModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
