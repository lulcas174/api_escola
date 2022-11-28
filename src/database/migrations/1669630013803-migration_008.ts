import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0081669630013803 implements MigrationInterface {
    name = 'migration0081669630013803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "boletim" RENAME COLUMN "aprovacao" TO "aprovado"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "boletim" RENAME COLUMN "aprovado" TO "aprovacao"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
