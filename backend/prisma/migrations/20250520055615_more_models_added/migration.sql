/*
  Warnings:

  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NoticeBoard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usergroupmapping` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "NoticeBoard" DROP CONSTRAINT "NoticeBoard_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Usergroupmapping" DROP CONSTRAINT "Usergroupmapping_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Usergroupmapping" DROP CONSTRAINT "Usergroupmapping_user_id_fkey";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "NoticeBoard";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Usergroupmapping";

-- CreateTable
CREATE TABLE "user_details" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "frist_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "refreshToken" TEXT,
    "role" "ROLE" NOT NULL,
    "github_link" TEXT NOT NULL,
    "hashnode_link" TEXT NOT NULL,
    "peerlist_link" TEXT NOT NULL,
    "tweeter_link" TEXT NOT NULL,

    CONSTRAINT "user_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cohort_details" (
    "id" SERIAL NOT NULL,
    "cohort_name" TEXT NOT NULL,

    CONSTRAINT "cohort_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_details" (
    "id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "group_desc" TEXT NOT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "admin_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_cohort_mapping" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "cohort_id" INTEGER NOT NULL,

    CONSTRAINT "user_cohort_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_joining_request_details" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "request_note_by_user" TEXT,
    "rejection_remark" TEXT,
    "requested_on" TIMESTAMP(3),
    "responded_on" TIMESTAMP(3),

    CONSTRAINT "group_joining_request_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notice_board_details" (
    "id" SERIAL NOT NULL,
    "board_text" TEXT,
    "group_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notice_board_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_group_mapping" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "joining_date" TIMESTAMP(3),
    "leaving_date" TIMESTAMP(3),
    "leaving_reason" TEXT,
    "removed_reason" TEXT,
    "removed_date" TIMESTAMP(3),
    "is_active_member" BOOLEAN DEFAULT false,

    CONSTRAINT "user_group_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_details_email_key" ON "user_details"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cohort_details_cohort_name_key" ON "cohort_details"("cohort_name");

-- CreateIndex
CREATE UNIQUE INDEX "group_details_group_name_key" ON "group_details"("group_name");

-- AddForeignKey
ALTER TABLE "group_details" ADD CONSTRAINT "group_details_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "user_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_cohort_mapping" ADD CONSTRAINT "user_cohort_mapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_cohort_mapping" ADD CONSTRAINT "user_cohort_mapping_cohort_id_fkey" FOREIGN KEY ("cohort_id") REFERENCES "cohort_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
