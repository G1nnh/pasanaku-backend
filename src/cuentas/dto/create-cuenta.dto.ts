import { ApiProperty } from "@nestjs/swagger";

export class CreateCuentaDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    codSecreto: string;

    @ApiProperty()
    nroTarjeta: string;

    @ApiProperty()
    fechaVencimiento: Date;

    @ApiProperty()
    nroCuenta: string;

    @ApiProperty()
    fechaHoraRegistro: Date;

    @ApiProperty()
    idJugador: number;
}
