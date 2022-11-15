import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0021668429635973 implements MigrationInterface {
    name = 'migration0021668429635973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "modulo" DROP CONSTRAINT "UQ_c56cddcd0841bdd4eb2a85c4c0b"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "UQ_e4899afb6e16338d712f5d8cb3d"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "UQ_0dda20c903dc09e002e9cf1b487"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "UQ_5c2b7f6c8da2eca31a5dea3502b"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "UQ_7d72b36d16642eb758366a072c1"`);
        await queryRunner.query(`ALTER TABLE "escola" DROP CONSTRAINT "UQ_d585a48a331b99e05910e8984df"`);
        await queryRunner.query(`ALTER TABLE "escola" DROP CONSTRAINT "UQ_5bb01f174b5fdf81e7ef64de155"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "escola" ADD CONSTRAINT "UQ_5bb01f174b5fdf81e7ef64de155" UNIQUE ("cnpj")`);
        await queryRunner.query(`ALTER TABLE "escola" ADD CONSTRAINT "UQ_d585a48a331b99e05910e8984df" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "UQ_7d72b36d16642eb758366a072c1" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "UQ_5c2b7f6c8da2eca31a5dea3502b" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "UQ_0dda20c903dc09e002e9cf1b487" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "UQ_e4899afb6e16338d712f5d8cb3d" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "modulo" ADD CONSTRAINT "UQ_c56cddcd0841bdd4eb2a85c4c0b" UNIQUE ("nome")`);
    }

}
