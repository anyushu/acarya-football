-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_en" TEXT NOT NULL,
    "name_ja" TEXT NOT NULL,
    "iso_code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "League" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "name_en" TEXT NOT NULL,
    "name_ja" TEXT NOT NULL,
    "date_established" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ClubTeam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_en" TEXT NOT NULL,
    "name_ja" TEXT NOT NULL,
    "date_established" DATETIME NOT NULL
);
