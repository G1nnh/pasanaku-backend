import { Jugador } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class JugadoresEntity implements Jugador {
    @ApiProperty()
    id: number;
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
