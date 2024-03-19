-- CreateTable
CREATE TABLE "Jugador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "carnet" INTEGER NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Jugador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Juego" (
    "id" SERIAL NOT NULL,
    "moneda" TEXT NOT NULL,
    "montoPago" INTEGER NOT NULL,
    "nombreJuego" TEXT NOT NULL,
    "cantidadJugadores" INTEGER NOT NULL,
    "periodoRonda" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Juego_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participante" (
    "id" SERIAL NOT NULL,
    "jugadorId" INTEGER NOT NULL,
    "juegoId" INTEGER NOT NULL,
    "fechaInscripcion" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "montoPagado" INTEGER NOT NULL,
    "montoGanado" INTEGER NOT NULL,
    "fechaPago" TIMESTAMP(3) NOT NULL,
    "fechaGanado" TIMESTAMP(3) NOT NULL,
    "rolId" INTEGER NOT NULL,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ronda" (
    "id" SERIAL NOT NULL,
    "juegoId" INTEGER NOT NULL,
    "nroRonda" INTEGER NOT NULL,
    "idGanadorRonda" INTEGER NOT NULL,

    CONSTRAINT "Ronda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transferencia" (
    "id" SERIAL NOT NULL,
    "fechaTransferencia" TIMESTAMP(3) NOT NULL,
    "tipoTransferencia" TEXT NOT NULL,
    "montoTransferencia" INTEGER NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Transferencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Oferta" (
    "id" SERIAL NOT NULL,
    "fechaHoraOferta" TIMESTAMP(3) NOT NULL,
    "montoOferta" INTEGER NOT NULL,
    "participanteId" INTEGER NOT NULL,

    CONSTRAINT "Oferta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invitacion" (
    "id" SERIAL NOT NULL,
    "fechaHoraInvitacion" TIMESTAMP(3) NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "enlace" TEXT NOT NULL,
    "fechaExpiracion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invitacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuenta" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codSecreto" TEXT NOT NULL,
    "nroTarjeta" TEXT NOT NULL,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "nroCuenta" TEXT NOT NULL,
    "fechaHoraRegistro" TIMESTAMP(3) NOT NULL,
    "idJugador" INTEGER NOT NULL,

    CONSTRAINT "Cuenta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_carnet_key" ON "Jugador"("carnet");

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_usuarioId_key" ON "Jugador"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Ronda_idGanadorRonda_key" ON "Ronda"("idGanadorRonda");

-- CreateIndex
CREATE UNIQUE INDEX "Cuenta_idJugador_key" ON "Cuenta"("idJugador");

-- AddForeignKey
ALTER TABLE "Jugador" ADD CONSTRAINT "Jugador_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_juegoId_fkey" FOREIGN KEY ("juegoId") REFERENCES "Juego"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ronda" ADD CONSTRAINT "Ronda_juegoId_fkey" FOREIGN KEY ("juegoId") REFERENCES "Juego"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ronda" ADD CONSTRAINT "Ronda_idGanadorRonda_fkey" FOREIGN KEY ("idGanadorRonda") REFERENCES "Participante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transferencia" ADD CONSTRAINT "Transferencia_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Oferta" ADD CONSTRAINT "Oferta_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitacion" ADD CONSTRAINT "Invitacion_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuenta" ADD CONSTRAINT "Cuenta_idJugador_fkey" FOREIGN KEY ("idJugador") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
