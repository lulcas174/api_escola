import {MigrationInterface, QueryRunner} from "typeorm";

export class Escola1668373648115 implements MigrationInterface {
    name = 'Escola1668373648115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "escola" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "logo" character varying NOT NULL, "rua" character varying NOT NULL, "numero" integer NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "cep" character varying NOT NULL, CONSTRAINT "UQ_d585a48a331b99e05910e8984df" UNIQUE ("nome"), CONSTRAINT "UQ_5bb01f174b5fdf81e7ef64de155" UNIQUE ("cnpj"), CONSTRAINT "PK_447d6d45b04cc04665709b39eae" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "escola"`);
    }

}
