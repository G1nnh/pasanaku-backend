import { ApiProperty } from "@nestjs/swagger";

export class CreateJugadoresDto {
    @ApiProperty()
    nombre: string;
    @ApiProperty()
    carnet: number;
    @ApiProperty()
    telefono: string;
    @ApiProperty()
    direccion: string;
    @ApiProperty()
    usuarioId: number;
}
