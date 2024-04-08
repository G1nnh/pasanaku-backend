import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { CreateJugadoresDto } from './dto/create-jugadores.dto';
import { UpdateJugadoresDto } from './dto/update-jugadores.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JugadoresEntity } from './entities/jugadore.entity';

@Controller('jugadores')
@ApiTags('jugadores')
export class JugadoresController {
  constructor(private readonly jugadoresService: JugadoresService) {}

  @Post()
  @ApiCreatedResponse({ type: JugadoresEntity })
  create(@Body() createJugadoreDto: CreateJugadoresDto) {
    return this.jugadoresService.create(createJugadoreDto);
  }

  @Get()
  @ApiOkResponse({ type: JugadoresEntity, isArray: true})
  findAll() {
    return this.jugadoresService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: JugadoresEntity })
  findOne(@Param('id') id: string) {
    return this.jugadoresService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: JugadoresEntity })
  update(@Param('id') id: string, @Body() updateJugadoreDto: UpdateJugadoresDto) {
    return this.jugadoresService.update(+id, updateJugadoreDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: JugadoresEntity })
  remove(@Param('id') id: string) {
    return this.jugadoresService.remove(+id);
  }
}
