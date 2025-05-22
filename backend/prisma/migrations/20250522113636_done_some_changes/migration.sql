/*
  Warnings:

  - You are about to drop the column `frist_name` on the `user_details` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `user_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_details" DROP COLUMN "frist_name",
ADD COLUMN     "first_name" TEXT NOT NULL;
