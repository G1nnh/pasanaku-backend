import { Module } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentasController } from './cuentas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CuentasController],
  providers: [CuentasService],
  imports: [PrismaModule],
})
export class CuentasModule {}
