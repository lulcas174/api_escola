import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0031669402638143 implements MigrationInterface {
    name = 'migration0031669402638143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "FK_89e61a6bd53e81c3241086cd47c"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP COLUMN "turmaId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aluno" ADD "turmaId" integer`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "FK_89e61a6bd53e81c3241086cd47c" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
