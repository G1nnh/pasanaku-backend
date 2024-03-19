import { Injectable } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CuentasService {
  constructor(private prisma: PrismaService) {}

  create(createCuentaDto: CreateCuentaDto) {
    return this.prisma.cuenta.create({ data: createCuentaDto });
  }

  findAll() {
    return this.prisma.cuenta.findMany();
  }

  findOne(id: number) {
    return this.prisma.cuenta.findUnique({ where: { id } });
  }

  update(id: number, updateCuentaDto: UpdateCuentaDto) {
    return this.prisma.cuenta.update({
      where: { id },
      data: updateCuentaDto,
    });
  }

  remove(id: number) {
    return this.prisma.cuenta.delete({ where: { id } });
  }
}
