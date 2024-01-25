/*
  Warnings:

  - You are about to drop the column `final_destination` on the `Customer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sender_name" TEXT NOT NULL,
    "sender_location" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "receiver_location" TEXT NOT NULL,
    "receiver_email" TEXT NOT NULL,
    "receiver_phone" INTEGER NOT NULL,
    "shipment_id" TEXT NOT NULL,
    "total_pieces" TEXT,
    "weight" TEXT,
    "volume" TEXT,
    "vessel_name" TEXT NOT NULL,
    "place_of_acceptance" TEXT,
    "estimated_departure_date" DATETIME NOT NULL,
    "estimated_arrival_date" DATETIME NOT NULL,
    "place_of_delivery" TEXT NOT NULL,
    "shipment_final_destination" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Customer" ("createdAt", "estimated_arrival_date", "estimated_departure_date", "id", "place_of_acceptance", "place_of_delivery", "receiver_email", "receiver_location", "receiver_name", "receiver_phone", "sender_location", "sender_name", "shipment_id", "total_pieces", "updatedAt", "vessel_name", "volume", "weight") SELECT "createdAt", "estimated_arrival_date", "estimated_departure_date", "id", "place_of_acceptance", "place_of_delivery", "receiver_email", "receiver_location", "receiver_name", "receiver_phone", "sender_location", "sender_name", "shipment_id", "total_pieces", "updatedAt", "vessel_name", "volume", "weight" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE UNIQUE INDEX "Customer_shipment_id_key" ON "Customer"("shipment_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
