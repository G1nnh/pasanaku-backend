import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService) {}

  create(createEstadoDto: CreateEstadoDto) {
    return this.prisma.estado.create({data: createEstadoDto});
  }

  findAll() {
    return `This action returns all estados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estado`;
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return `This action updates a #${id} estado`;
  }

  remove(id: number) {
    return `This action removes a #${id} estado`;
  }
}
