import { Injectable } from '@nestjs/common';
import { CreateJugadoresDto } from './dto/create-jugadores.dto';
import { UpdateJugadoresDto } from './dto/update-jugadores.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JugadoresService {
  constructor (private prisma: PrismaService) {}

 async create(createJugadoreDto: CreateJugadoresDto) {
    const jugador = await this.prisma.jugador.create({
      data: {
        nombre: createJugadoreDto.nombre,
        telefono: createJugadoreDto.telefono,
        usuarioId: Number(createJugadoreDto.usuarioId),
      },
    });
    return jugador;
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
