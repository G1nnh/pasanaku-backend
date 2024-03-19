import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    contrasena: string;
}
