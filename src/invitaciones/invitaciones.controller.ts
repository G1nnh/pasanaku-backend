import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitacionesService } from './invitaciones.service';
import { CreateInvitacioneDto } from './dto/create-invitacione.dto';
import { UpdateInvitacioneDto } from './dto/update-invitacione.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('invitaciones')
@ApiTags('invitaciones')
export class InvitacionesController {
  constructor(private readonly invitacionesService: InvitacionesService) {}

  @Post()
  create(@Body() createInvitacioneDto: CreateInvitacioneDto) {
    return this.invitacionesService.create(createInvitacioneDto);
  }

  @Get()
  findAll() {
    return this.invitacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvitacioneDto: UpdateInvitacioneDto) {
    return this.invitacionesService.update(+id, updateInvitacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitacionesService.remove(+id);
  }
}
