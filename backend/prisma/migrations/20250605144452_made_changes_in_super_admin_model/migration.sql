/*
  Warnings:

  - You are about to drop the column `refreshToken` on the `user_details` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "super_admin" ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "refreshToken" TEXT;

-- AlterTable
ALTER TABLE "user_details" DROP COLUMN "refreshToken";
