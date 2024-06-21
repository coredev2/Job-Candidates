/*
  Warnings:

  - You are about to drop the column `callTime` on the `Candidate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "callTime",
ADD COLUMN     "FinishCallTime" TEXT,
ADD COLUMN     "callDate" TEXT,
ADD COLUMN     "startCallTime" TEXT;
