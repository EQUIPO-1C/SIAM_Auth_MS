-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `bloodType` VARCHAR(191) NOT NULL,
    `ethnicity` VARCHAR(191) NOT NULL,
    `militarySituation` VARCHAR(191) NOT NULL,
    `identificationType` VARCHAR(191) NOT NULL,
    `identificationNumber` BIGINT NOT NULL,

    UNIQUE INDEX `username_unique_constraint`(`username`),
    UNIQUE INDEX `identificationNumber_User_unique_constraint`(`identificationNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `identificationType` VARCHAR(191) NOT NULL,
    `identificationNumber` BIGINT NOT NULL,

    UNIQUE INDEX `identificationNumber_Attendant_unique_constraint`(`identificationNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AttendantToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AttendantToUser_AB_unique`(`A`, `B`),
    INDEX `_AttendantToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AttendantToUser` ADD CONSTRAINT `_AttendantToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Attendant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AttendantToUser` ADD CONSTRAINT `_AttendantToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
