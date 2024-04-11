import { ApiProperty } from "@nestjs/swagger";

export class CreateJuegoDto {
    @ApiProperty()
    moneda: string;

    @ApiProperty()
    montoPago: Number;
    
    @ApiProperty()
    nombreJuego: string;

    @ApiProperty()
    cantidadJugadores: Number;

    @ApiProperty()
    periodoRonda: string;

    @ApiProperty()
    estadoId: Number;
}
