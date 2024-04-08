import { Injectable } from '@nestjs/common';
import { CreateJugadoresDto } from './dto/create-jugadores.dto';
import { UpdateJugadoresDto } from './dto/update-jugadores.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JugadoresService {
  constructor (private prisma: PrismaService) {}

  create(createJugadoreDto: CreateJugadoresDto) {
    return this.prisma.jugador.create({ data: createJugadoreDto });
  }

  findAll() {
    return this.prisma.jugador.findMany();
  }

  findOne(id: number) {
    return this.prisma.jugador.findUnique({ where: { id } });
  }

  update(id: number, updateJugadoresDto: UpdateJugadoresDto) {
    return this.prisma.jugador.update({
      where: { id },
      data: updateJugadoresDto,
    });
  }

  remove(id: number) {
    return this.prisma.jugador.delete({ where: { id } });
  }
}
