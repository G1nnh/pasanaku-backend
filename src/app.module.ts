import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JugadoresModule } from './jugadores/jugadores.module';

@Module({
  imports: [PrismaModule, UsuariosModule, JugadoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
