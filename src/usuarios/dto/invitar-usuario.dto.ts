import { ApiProperty } from "@nestjs/swagger";

export class InvitarUsuarioDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    contrasena: string;

    telefono: string;
    nombre: string;
}