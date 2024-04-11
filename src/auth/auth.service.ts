import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }

    async login(email: string, contrasena: string): Promise<AuthEntity> {
        // Step 1: Fetch a usuario with the given email
        const usuario = await this.prisma.usuario.findUnique({ where: { email: email } });

        // If no usuario is found, throw an error
        if (!usuario) {
            throw new NotFoundException(`No se encontró usuario para el email: ${email}`);
        }

        // Step 2: Check if the contrasena is correct
        const isContrasenaValid = await bcrypt.compare(contrasena, usuario.contrasena);

        // If contrasena does not match, throw an error
        if (!isContrasenaValid) {
            throw new UnauthorizedException('Invalid contrasena');
        }

        // Step 3: Generate a JWT containing the usuario's ID and return it
        return {
            accessToken: this.jwtService.sign({ usuarioId: usuario.id }),
        };
    }
}
