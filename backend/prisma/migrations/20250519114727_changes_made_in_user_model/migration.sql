-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "refreshToken" TEXT,
ALTER COLUMN "is_published" SET DEFAULT false;
