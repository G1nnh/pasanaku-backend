import { Injectable } from '@nestjs/common';
import { CreateInvitacioneDto } from './dto/create-invitacione.dto';
import { UpdateInvitacioneDto } from './dto/update-invitacione.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailsService } from '../mails/mails.service';//ADICION

@Injectable()
export class InvitacionesService {
  constructor (
    private prisma: PrismaService,
    private mailService: MailsService,//ADICION
  ) { }

  async create(createInvitacioneDto: CreateInvitacioneDto) {
    const invitacion = await this.prisma.invitacion.create({
      data: {
        participanteId: Number(createInvitacioneDto.participanteId),
        email: createInvitacioneDto.email,
        telefono: createInvitacioneDto.telefono,
        estadoId: Number(createInvitacioneDto.estadoId),
      },
    });
    const infoMail = await this.mailService.sendInviteMail(createInvitacioneDto.nombre, createInvitacioneDto.email);
    const infoSMS = await this.mailService.sendInviteWhatsapp(createInvitacioneDto.telefono, createInvitacioneDto.nombre);
    return [invitacion, infoMail, infoSMS];
  }

  
  async misInvitaciones(miId: number) {
    const invitaciones = await this.prisma.invitacion.findMany({
      where: { participanteId: miId },
    });
    return invitaciones;
  }

  async reenvio(createInvitacioneDto: CreateInvitacioneDto) {
    const infoMail = await this.mailService.sendInviteMail(createInvitacioneDto.nombre, createInvitacioneDto.email);
    const infoSMS = await this.mailService.sendInviteWhatsapp(createInvitacioneDto.telefono, createInvitacioneDto.nombre);
    return [infoMail, infoSMS];
  }

  async findAll() {
    const invitaciones = await this.prisma.invitacion.findMany();
    // const juego = await this.prisma.participante.findMany({
    //   where: {
    //     id: Number(invitaciones[0].participanteId)
    //   },
    // });
    return invitaciones;
  }

  findOne(id: number) {
    return this.prisma.invitacion.findMany({
      where: { participanteId: id },
      });
  }

  update(id: number, updateInvitacioneDto: UpdateInvitacioneDto) {
    return `This action updates a #${id} invitacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitacione`;
  }
}
