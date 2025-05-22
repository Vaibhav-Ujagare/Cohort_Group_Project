/*
  Warnings:

  - A unique constraint covering the columns `[cohort_name]` on the table `cohort_details` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cohort_details_cohort_name_key" ON "cohort_details"("cohort_name");
