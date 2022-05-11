import {MigrationInterface, QueryRunner} from "typeorm";

export class QLNN1652262057710 implements MigrationInterface {
    name = 'QLNN1652262057710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`don_dat_phongs\` DROP COLUMN \`so_cmt\``);
        await queryRunner.query(`ALTER TABLE \`don_dat_phongs\` ADD \`so_cmt\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`don_dat_phongs\` DROP COLUMN \`so_cmt\``);
        await queryRunner.query(`ALTER TABLE \`don_dat_phongs\` ADD \`so_cmt\` int NOT NULL`);
    }

}
