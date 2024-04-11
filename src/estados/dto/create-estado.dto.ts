import { ApiProperty } from "@nestjs/swagger";

export class CreateEstadoDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    descripcion: string;
}