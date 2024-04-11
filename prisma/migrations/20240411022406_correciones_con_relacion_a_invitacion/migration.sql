/*
  Warnings:

  - You are about to drop the column `estado` on the `Juego` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Participante` table. All the data in the column will be lost.
  - Added the required column `estadoId` to the `Juego` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoId` to the `Participante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invitacion" ALTER COLUMN "descripcion" DROP NOT NULL,
ALTER COLUMN "enlace" DROP NOT NULL,
ALTER COLUMN "fechaExpiracion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Juego" DROP COLUMN "estado",
ADD COLUMN     "estadoId" INTEGER NOT NULL,
ALTER COLUMN "fechaInicio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Participante" DROP COLUMN "estado",
ADD COLUMN     "estadoId" INTEGER NOT NULL,
ALTER COLUMN "fechaInscripcion" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "montoPagado" DROP NOT NULL,
ALTER COLUMN "montoGanado" DROP NOT NULL,
ALTER COLUMN "fechaPago" DROP NOT NULL,
ALTER COLUMN "fechaGanado" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Juego" ADD CONSTRAINT "Juego_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
