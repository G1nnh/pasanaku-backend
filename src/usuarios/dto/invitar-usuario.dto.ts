import { ApiProperty } from "@nestjs/swagger";

export class InvitarUsuarioDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    contrasena: string;

    @ApiProperty()
    telefono: string;
    
    @ApiProperty()
    nombre: string;
}