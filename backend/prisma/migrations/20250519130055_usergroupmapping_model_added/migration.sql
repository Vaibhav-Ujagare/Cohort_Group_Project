/*
  Warnings:

  - A unique constraint covering the columns `[group_name]` on the table `Group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Usergroupmapping" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "joining_date" TIMESTAMP(3),
    "leaving_date" TIMESTAMP(3),
    "leaving_reason" TEXT,
    "removed_reason" TEXT,
    "removed_date" TIMESTAMP(3),
    "is_active_member" BOOLEAN DEFAULT false,

    CONSTRAINT "Usergroupmapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_group_name_key" ON "Group"("group_name");

-- AddForeignKey
ALTER TABLE "Usergroupmapping" ADD CONSTRAINT "Usergroupmapping_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usergroupmapping" ADD CONSTRAINT "Usergroupmapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;


