import { Injectable } from '@nestjs/common';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { UpdateJuegoDto } from './dto/update-juego.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JuegosService {
  constructor(private prisma: PrismaService) {}

  create(createJuegoDto: CreateJuegoDto) {
    return this.prisma.juego.create({data: createJuegoDto});
  }

  findAll() {
    return this.prisma.juego.findMany();
  }

  findOne(id: number) {
    return this.prisma.juego.findUnique({where: { id } });
  }

  update(id: number, updateJuegoDto: UpdateJuegoDto) {
    return this.prisma.juego.update({
      where: { id },
      data: updateJuegoDto,
    });
  }

  remove(id: number) {
    return this.prisma.juego.delete({where: { id }});
  }
}
