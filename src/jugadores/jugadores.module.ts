import { Module } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { JugadoresController } from './jugadores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [JugadoresController],
  providers: [JugadoresService],
  imports: [PrismaModule],
})
export class JugadoresModule {}
