import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0051669485517768 implements MigrationInterface {
    name = 'migration0051669485517768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "UQ_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "turmaId"`);
        await queryRunner.query(`ALTER TABLE "turma" ADD "professoresId" integer`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_ec3cc466f703f9184eb3d4abd0e" FOREIGN KEY ("professoresId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_ec3cc466f703f9184eb3d4abd0e"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP COLUMN "professoresId"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "turmaId" integer`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "UQ_358cc17587cbf26c1894f2dc15b" UNIQUE ("turmaId")`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
