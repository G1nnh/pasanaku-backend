import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundOfHashing = 10;

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(
      createUsuarioDto.contrasena,
      roundOfHashing
    );
    createUsuarioDto.contrasena = hashedPassword;
    return this.prisma.usuario.create({ data: createUsuarioDto });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    if (updateUsuarioDto.contrasena) {
      updateUsuarioDto.contrasena = await bcrypt.hash(
        updateUsuarioDto.contrasena,
        roundOfHashing
      );
    }

    return this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
