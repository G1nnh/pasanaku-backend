import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InvitarUsuarioDto } from './dto/invitar-usuario.dto';//ADICION
import { CrearUsuarioJugadorDto } from './dto/crear-usuario-jugador.dto';
import { CreateJuegoDto } from 'src/juegos/dto/create-juego.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailsService } from '../mails/mails.service';//ADICION
import { JugadoresService } from 'src/jugadores/jugadores.service';
import * as bcrypt from 'bcrypt';
import { CreateJugadoresDto } from 'src/jugadores/dto/create-jugadores.dto';

export const roundOfHashing = 10;

@Injectable()
export class UsuariosService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailsService,//ADICION
    private jugadoresService: JugadoresService
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(
      createUsuarioDto.contrasena,
      roundOfHashing
    );
    createUsuarioDto.contrasena = hashedPassword;
    return this.prisma.usuario.create({ data: createUsuarioDto });
  }

  // Crear Usuario Jugador
  async crearUsuarioJugador(crearUsuarioJugador: CrearUsuarioJugadorDto) {
    const hashedPassword = await bcrypt.hash(
      crearUsuarioJugador.contrasena,
      roundOfHashing
    );
    crearUsuarioJugador.contrasena = hashedPassword;

    var usuarioNuevo = await this.prisma.usuario.create(
      { data: 
        {
          email: crearUsuarioJugador.email,
          contrasena: crearUsuarioJugador.contrasena
        }
      }
    );

    var crearJugadorDto = new CreateJugadoresDto();
    crearJugadorDto.nombre = crearUsuarioJugador.nombre;
    crearJugadorDto.telefono = crearUsuarioJugador.telefono;
    crearJugadorDto.usuarioId = usuarioNuevo.id;

    this.jugadoresService.create(crearJugadorDto);

    return usuarioNuevo;
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

  async crear(invitado: InvitarUsuarioDto) {//ADICION
    // const usuarioCreado = await this.create(usuario);
    let infoMail: any;
    let infoSMS: any;
    try {
      infoMail = await this.mailService.sendInviteMail(invitado.nombre, invitado.email);
      infoSMS = await this.mailService.sendInviteWhatsapp(invitado.telefono, invitado.nombre);
    } catch (error) {
      console.log(error)
    }
    return { infoMail, infoSMS }
  }
}
