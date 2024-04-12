import { Injectable } from '@nestjs/common';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { UpdateJuegoDto } from './dto/update-juego.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JuegosService {
  constructor(private prisma: PrismaService) {}

  async create(createJuegoDto: CreateJuegoDto) {
    const juego = await this.prisma.juego.create({
      data: {
        moneda: createJuegoDto.moneda,
        montoPago: Number(createJuegoDto.montoPago),
        nombreJuego: createJuegoDto.nombreJuego,
        cantidadJugadores: Number(createJuegoDto.cantidadJugadores),
        periodoRonda: createJuegoDto.periodoRonda,
        estadoId: Number(createJuegoDto.estadoId),
      },
    });
    return juego;
  }

  findAll() {
    return this.prisma.juego.findMany();
  }

  findAllByJugadorId(id: number) {
    return this.prisma.juego.findMany({where: { id } });
  }

  findOne(id: number) {
    return this.prisma.juego.findUnique({where: { id } });
  }

  // update(id: number, updateJuegoDto: UpdateJuegoDto) {
  //   return this.prisma.juego.update({
  //     where: { id },
  //     data: updateJuegoDto,
  //   });
  // }

  remove(id: number) {
    return this.prisma.juego.delete({where: { id }});
  }
}
