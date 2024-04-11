/*
  Warnings:

  - A unique constraint covering the columns `[telefono]` on the table `Jugador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estadoId` to the `Invitacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invitacion" ADD COLUMN     "estadoId" INTEGER NOT NULL,
ALTER COLUMN "fechaHoraInvitacion" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Jugador" ALTER COLUMN "carnet" DROP NOT NULL,
ALTER COLUMN "direccion" DROP NOT NULL;

-- CreateTable
CREATE TABLE "estado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_telefono_key" ON "Jugador"("telefono");

-- AddForeignKey
ALTER TABLE "Invitacion" ADD CONSTRAINT "Invitacion_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
