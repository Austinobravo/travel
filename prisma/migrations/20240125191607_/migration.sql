/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `Locations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Locations_customerId_key" ON "Locations"("customerId");
