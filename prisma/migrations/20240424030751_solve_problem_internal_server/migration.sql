/*
  Warnings:

  - You are about to drop the column `assignedtoUserId` on the `issue` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `issue` DROP FOREIGN KEY `Issue_assignedtoUserId_fkey`;

-- AlterTable
ALTER TABLE `issue` DROP COLUMN `assignedtoUserId`,
    ADD COLUMN `assignedToUserId` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `email_verified`,
    ADD COLUMN `emailVerified` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignedToUserId_fkey` FOREIGN KEY (`assignedToUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
