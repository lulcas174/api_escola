import {MigrationInterface, QueryRunner} from "typeorm";

export class Aluno1668378126422 implements MigrationInterface {
    name = 'Aluno1668378126422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "modulo" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "numeroModulo" integer NOT NULL, CONSTRAINT "UQ_c56cddcd0841bdd4eb2a85c4c0b" UNIQUE ("nome"), CONSTRAINT "PK_0b577bb28fdb8c35383e2c573ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professor" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "tituloAcademico" character varying NOT NULL, "disciplinaFixa" character varying NOT NULL, CONSTRAINT "UQ_e4899afb6e16338d712f5d8cb3d" UNIQUE ("nome"), CONSTRAINT "UQ_0dda20c903dc09e002e9cf1b487" UNIQUE ("cpf"), CONSTRAINT "PK_39a6c8f16280dc3bc3ffdc41e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "turma" ("id" SERIAL NOT NULL, "turma" character varying NOT NULL, "disciplina" character varying NOT NULL, "professorId" integer, CONSTRAINT "REL_0fc28414637572e39e3d2d6f08" UNIQUE ("professorId"), CONSTRAINT "PK_b7da8685b4c588d7bb0c3b30930" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "aluno" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "numeroMatricula" integer NOT NULL, "moduloId" integer, "turmaId" integer, CONSTRAINT "UQ_5c2b7f6c8da2eca31a5dea3502b" UNIQUE ("nome"), CONSTRAINT "UQ_7d72b36d16642eb758366a072c1" UNIQUE ("cpf"), CONSTRAINT "REL_8c3635cfd7fd2bbd6c941c3caf" UNIQUE ("moduloId"), CONSTRAINT "PK_9611d4cf7a77574063439cf46b2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boletim" ("id" SERIAL NOT NULL, "notaFinal" integer NOT NULL, "aprovacao" boolean NOT NULL, "alunoId" integer, CONSTRAINT "REL_3e6ced693571300f82b4a0bb95" UNIQUE ("alunoId"), CONSTRAINT "PK_f58505e83a96191619d361b9ded" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "turma" ADD CONSTRAINT "FK_0fc28414637572e39e3d2d6f083" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "FK_8c3635cfd7fd2bbd6c941c3caf2" FOREIGN KEY ("moduloId") REFERENCES "modulo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "aluno" ADD CONSTRAINT "FK_89e61a6bd53e81c3241086cd47c" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "boletim" ADD CONSTRAINT "FK_3e6ced693571300f82b4a0bb95d" FOREIGN KEY ("alunoId") REFERENCES "aluno"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boletim" DROP CONSTRAINT "FK_3e6ced693571300f82b4a0bb95d"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "FK_89e61a6bd53e81c3241086cd47c"`);
        await queryRunner.query(`ALTER TABLE "aluno" DROP CONSTRAINT "FK_8c3635cfd7fd2bbd6c941c3caf2"`);
        await queryRunner.query(`ALTER TABLE "turma" DROP CONSTRAINT "FK_0fc28414637572e39e3d2d6f083"`);
        await queryRunner.query(`DROP TABLE "boletim"`);
        await queryRunner.query(`DROP TABLE "aluno"`);
        await queryRunner.query(`DROP TABLE "turma"`);
        await queryRunner.query(`DROP TABLE "professor"`);
        await queryRunner.query(`DROP TABLE "modulo"`);
    }

}
