import { ApiProperty } from "@nestjs/swagger";

export class CreateParticipanteDto {
    @ApiProperty()
    jugadorId: number;
    @ApiProperty()
    juegoId: number;
    @ApiProperty()
    estadoId: number;
    @ApiProperty()
    rolId: number;
}
