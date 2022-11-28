import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0061669550789369 implements MigrationInterface {
    name = 'migration0061669550789369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_ec3cc466f703f9184eb3d4abd0e"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP COLUMN "professoresId"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "turma_id" integer`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "UQ_196457087bc7e47de7a7a097c2b" UNIQUE ("turma_id")`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_196457087bc7e47de7a7a097c2b" FOREIGN KEY ("turma_id") REFERENCES "turma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_196457087bc7e47de7a7a097c2b"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "UQ_196457087bc7e47de7a7a097c2b"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "turma_id"`);
        await queryRunner.query(`ALTER TABLE "turma" ADD "professoresId" integer`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_ec3cc466f703f9184eb3d4abd0e" FOREIGN KEY ("professoresId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
