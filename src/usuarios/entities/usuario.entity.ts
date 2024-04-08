import { Usuario } from '@prisma/client'
import { ApiProperty } from "@nestjs/swagger";

export class UsuarioEntity implements Usuario{
    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;

    @ApiProperty()
    contrasena: string;
}