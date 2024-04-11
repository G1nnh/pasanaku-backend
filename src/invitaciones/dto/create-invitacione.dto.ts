import { ApiProperty } from "@nestjs/swagger";

export class CreateInvitacioneDto {
    
    @ApiProperty()
    fechaHoraInvitacion: Date;
    @ApiProperty()
    participanteId: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    telefono: string;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    enlace: string;
    @ApiProperty()
    fechaExpiracion: Date;
    @ApiProperty()
    estadoId: number;
}
