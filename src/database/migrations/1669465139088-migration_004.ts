import {MigrationInterface, QueryRunner} from "typeorm";

export class migration0041669465139088 implements MigrationInterface {
    name = 'migration0041669465139088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boletim" DROP CONSTRAINT "FK_3e6ced693571300f82b4a0bb95d"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_0fc28414637572e39e3d2d6f083"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "FK_e7515a212c0aecc2e8e6a8e5976"`);
        await queryRunner.query(`ALTER TABLE "boletim" DROP CONSTRAINT "REL_3e6ced693571300f82b4a0bb95"`);
        await queryRunner.query(`ALTER TABLE "boletim" DROP COLUMN "alunoId"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "disciplinaFixa"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "REL_0fc28414637572e39e3d2d6f08"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP COLUMN "professorId"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "REL_e7515a212c0aecc2e8e6a8e597"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP COLUMN "moduleId"`);
        await queryRunner.query(`CREATE TYPE "public"."professor_disciplina_enum" AS ENUM('Matemática', 'Português', 'História', 'Geografia', 'Ciências')`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "disciplina" "public"."professor_disciplina_enum"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "turmaId" integer`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "UQ_358cc17587cbf26c1894f2dc15b" UNIQUE ("turmaId")`);
        await queryRunner.query(`CREATE TYPE "public"."aluno_disciplina_enum" AS ENUM('Módulo 1', 'Módulo 2', 'Módulo 3')`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD "disciplina" "public"."aluno_disciplina_enum" DEFAULT 'Módulo 1'`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD "turmaId" integer`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD "boletimId" integer`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "UQ_69d8aaa3d800994fead46c7299d" UNIQUE ("boletimId")`);
        await queryRunner.query(`ALTER TABLE "turma" DROP COLUMN "disciplina"`);
        await queryRunner.query(`CREATE TYPE "public"."turma_disciplina_enum" AS ENUM('Matemática', 'Português', 'História', 'Geografia', 'Ciências')`);
        await queryRunner.query(`ALTER TABLE "turma" ADD "disciplina" "public"."turma_disciplina_enum"`);
        await queryRunner.query(`ALTER TABLE "professor" ADD CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "FK_89e61a6bd53e81c3241086cd47c" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "FK_69d8aaa3d800994fead46c7299d" FOREIGN KEY ("boletimId") REFERENCES "boletim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "FK_69d8aaa3d800994fead46c7299d"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "FK_89e61a6bd53e81c3241086cd47c"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "FK_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP COLUMN "disciplina"`);
        await queryRunner.query(`DROP TYPE "public"."turma_disciplina_enum"`);
        await queryRunner.query(`ALTER TABLE "turma" ADD "disciplina" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "UQ_69d8aaa3d800994fead46c7299d"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP COLUMN "boletimId"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP COLUMN "turmaId"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP COLUMN "disciplina"`);
        await queryRunner.query(`DROP TYPE "public"."aluno_disciplina_enum"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP CONSTRAINT "UQ_358cc17587cbf26c1894f2dc15b"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "turmaId"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "disciplina"`);
        await queryRunner.query(`DROP TYPE "public"."professor_disciplina_enum"`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD "moduleId" integer`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "REL_e7515a212c0aecc2e8e6a8e597" UNIQUE ("moduleId")`);
        await queryRunner.query(`ALTER TABLE "turma" ADD "professorId" integer`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "REL_0fc28414637572e39e3d2d6f08" UNIQUE ("professorId")`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "disciplinaFixa" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boletim" ADD "alunoId" integer`);
        await queryRunner.query(`ALTER TABLE "boletim" ADD CONSTRAINT "REL_3e6ced693571300f82b4a0bb95" UNIQUE ("alunoId")`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "FK_e7515a212c0aecc2e8e6a8e5976" FOREIGN KEY ("moduleId") REFERENCES "modulo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_0fc28414637572e39e3d2d6f083" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "boletim" ADD CONSTRAINT "FK_3e6ced693571300f82b4a0bb95d" FOREIGN KEY ("alunoId") REFERENCES "aluno"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
