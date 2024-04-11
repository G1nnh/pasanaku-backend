import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async create(createParticipanteDto: CreateParticipanteDto) {
    const participante = await this.prisma.participante.create({
      data: {
        jugadorId: Number(createParticipanteDto.jugadorId),
        juegoId: Number(createParticipanteDto.juegoId),
        estadoId: Number(createParticipanteDto.estadoId),
        rolId: Number(createParticipanteDto.rolId),
      },
    });
    return participante;
  }

  findAll() {
    return this.prisma.participante.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} participante`;
  }

  update(id: number, updateParticipanteDto: UpdateParticipanteDto) {
    return `This action updates a #${id} participante`;
  }

  remove(id: number) {
    return `This action removes a #${id} participante`;
  }
}
