import { Module } from '@nestjs/common';
import { JuegosService } from './juegos.service';
import { JuegosController } from './juegos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [JuegosController],
  providers: [JuegosService],
  imports: [PrismaModule],
})
export class JuegosModule {}
