/*
  Warnings:

  - You are about to drop the column `refreshToken` on the `Group` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "refreshToken";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refreshToken" TEXT;
