-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Customer" (
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "current_location" TEXT NOT NULL,
    "info_on_current_location" TEXT NOT NULL,
    "final_destination" BOOLEAN,
    "customerId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Locations_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_shipment_id_key" ON "Customer"("shipment_id");

-- CreateIndex
CREATE INDEX "Locations_customerId_idx" ON "Locations"("customerId");
