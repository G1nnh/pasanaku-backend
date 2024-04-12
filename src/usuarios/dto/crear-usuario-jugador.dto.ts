import { ApiProperty } from "@nestjs/swagger";

export class CrearUsuarioJugadorDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    contrasena: string;

    @ApiProperty()
    telefono: string;
    
    @ApiProperty()  
    nombre: string;
}