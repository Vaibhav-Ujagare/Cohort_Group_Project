/*
  Warnings:

  - A unique constraint covering the columns `[user_id,cohort_id]` on the table `user_cohort_mapping` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_cohort_mapping_user_id_cohort_id_key" ON "user_cohort_mapping"("user_id", "cohort_id");
