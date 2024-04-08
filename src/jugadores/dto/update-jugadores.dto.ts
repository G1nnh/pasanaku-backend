import { PartialType } from '@nestjs/swagger';
import { CreateJugadoresDto } from './create-jugadores.dto';

export class UpdateJugadoresDto extends PartialType(CreateJugadoresDto) {}
