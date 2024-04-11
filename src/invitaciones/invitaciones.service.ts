import { Injectable } from '@nestjs/common';
import { CreateInvitacioneDto } from './dto/create-invitacione.dto';
import { UpdateInvitacioneDto } from './dto/update-invitacione.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvitacionesService {
  constructor (private prisma: PrismaService) { }

  async create(createInvitacioneDto: CreateInvitacioneDto) {
    const invitacion = await this.prisma.invitacion.create({
      data: {
        fechaHoraInvitacion: new Date(createInvitacioneDto.fechaHoraInvitacion),
        participanteId: Number(createInvitacioneDto.participanteId),
        email: createInvitacioneDto.email,
        telefono: createInvitacioneDto.telefono,
        descripcion: createInvitacioneDto.descripcion,
        enlace: createInvitacioneDto.enlace,
        fechaExpiracion: new Date(createInvitacioneDto.fechaExpiracion),
        estadoId: Number(createInvitacioneDto.estadoId),
      },
    });
    return invitacion;
  }

  findAll() {
    return this.prisma.invitacion.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} invitacione`;
  }

  update(id: number, updateInvitacioneDto: UpdateInvitacioneDto) {
    return `This action updates a #${id} invitacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitacione`;
  }
}
