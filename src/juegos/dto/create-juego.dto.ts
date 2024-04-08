import { ApiProperty } from "@nestjs/swagger";

export class CreateJuegoDto {
    @ApiProperty()
    moneda: string;

    @ApiProperty()
    montoPago: number;
    
    @ApiProperty()
    nombreJuego: string;

    @ApiProperty()
    cantidadJugadores: number;

    @ApiProperty()
    periodoRonda: string;

    @ApiProperty()
    fechaInicio: Date;

    @ApiProperty()
    estado: string;
}
