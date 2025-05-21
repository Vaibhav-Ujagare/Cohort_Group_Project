/*
  Warnings:

  - The primary key for the `cohort_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `group_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `group_joining_request_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `notice_board_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_cohort_mapping` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_group_mapping` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "group_details" DROP CONSTRAINT "group_details_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "group_joining_request_details" DROP CONSTRAINT "group_joining_request_details_group_id_fkey";

-- DropForeignKey
ALTER TABLE "group_joining_request_details" DROP CONSTRAINT "group_joining_request_details_user_id_fkey";

-- DropForeignKey
ALTER TABLE "notice_board_details" DROP CONSTRAINT "notice_board_details_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_cohort_mapping" DROP CONSTRAINT "user_cohort_mapping_cohort_id_fkey";

-- DropForeignKey
ALTER TABLE "user_cohort_mapping" DROP CONSTRAINT "user_cohort_mapping_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_group_mapping" DROP CONSTRAINT "user_group_mapping_group_id_fkey";

-- DropForeignKey
ALTER TABLE "user_group_mapping" DROP CONSTRAINT "user_group_mapping_user_id_fkey";

-- AlterTable
ALTER TABLE "cohort_details" DROP CONSTRAINT "cohort_details_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cohort_details_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cohort_details_id_seq";

-- AlterTable
ALTER TABLE "group_details" DROP CONSTRAINT "group_details_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "admin_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "group_details_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "group_details_id_seq";

-- AlterTable
ALTER TABLE "group_joining_request_details" DROP CONSTRAINT "group_joining_request_details_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "group_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "group_joining_request_details_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "group_joining_request_details_id_seq";

-- AlterTable
ALTER TABLE "notice_board_details" DROP CONSTRAINT "notice_board_details_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "notice_board_details_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "notice_board_details_id_seq";

-- AlterTable
ALTER TABLE "user_cohort_mapping" DROP CONSTRAINT "user_cohort_mapping_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "cohort_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_cohort_mapping_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_cohort_mapping_id_seq";

-- AlterTable
ALTER TABLE "user_details" DROP CONSTRAINT "user_details_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_details_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_details_id_seq";

-- AlterTable
ALTER TABLE "user_group_mapping" DROP CONSTRAINT "user_group_mapping_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "group_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_group_mapping_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_group_mapping_id_seq";

-- AddForeignKey
ALTER TABLE "group_details" ADD CONSTRAINT "group_details_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "user_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_cohort_mapping" ADD CONSTRAINT "user_cohort_mapping_cohort_id_fkey" FOREIGN KEY ("cohort_id") REFERENCES "cohort_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_cohort_mapping" ADD CONSTRAINT "user_cohort_mapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_joining_request_details" ADD CONSTRAINT "group_joining_request_details_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "group_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_joining_request_details" ADD CONSTRAINT "group_joining_request_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notice_board_details" ADD CONSTRAINT "notice_board_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_group_mapping" ADD CONSTRAINT "user_group_mapping_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "group_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_group_mapping" ADD CONSTRAINT "user_group_mapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;
