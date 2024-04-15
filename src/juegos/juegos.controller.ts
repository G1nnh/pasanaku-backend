import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { JuegosService } from './juegos.service';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { UpdateJuegoDto } from './dto/update-juego.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('juegos')
@ApiTags('juegos')
export class JuegosController {
  constructor(private readonly juegosService: JuegosService) {}

  @Post()
  create(@Body() createJuegoDto: CreateJuegoDto) {
    return this.juegosService.create(createJuegoDto);
  }

  @Get()
  findAll() {
    return this.juegosService.findAll();
  }


  // modificar (mal creado) *********
  @Get('juegos-jugador')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findAllByJugadorId(@Req() request: any) {
    const jugadorId = request.user.id;
    return await this.juegosService.findAllByJugadorId(jugadorId);
  }
  // ********************

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juegosService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJuegoDto: UpdateJuegoDto) {
  //   return this.juegosService.update(+id, updateJuegoDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juegosService.remove(+id);
  }
}
