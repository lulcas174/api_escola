import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0061669628658760 implements MigrationInterface {
    name = 'migration0061669628658760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_196457087bc7e47de7a7a097c2b"`);
        await queryRunner.query(`ALTER TABLE "professor" RENAME COLUMN "turma_id" TO "turmaId"`);
        await queryRunner.query(`ALTER TABLE "professor" RENAME CONSTRAINT "UQ_196457087bc7e47de7a7a097c2b" TO "UQ_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "professor" RENAME CONSTRAINT "UQ_358cc17587cbf26c1894f2dc15b" TO "UQ_196457087bc7e47de7a7a097c2b"`);
        await queryRunner.query(`ALTER TABLE "professor" RENAME COLUMN "turmaId" TO "turma_id"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_196457087bc7e47de7a7a097c2b" FOREIGN KEY ("turma_id") REFERENCES "turma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
