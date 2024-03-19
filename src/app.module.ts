import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JuegosModule } from './juegos/juegos.module';

@Module({
  imports: [PrismaModule, UsuariosModule, JuegosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
