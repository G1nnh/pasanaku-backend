import { ApiProperty } from "@nestjs/swagger";

export class CreateInvitacioneDto {
   
    @ApiProperty()
    participanteId: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    telefono: string;
    @ApiProperty()
    estadoId: number;
    @ApiProperty()
    nombre: string;
}
