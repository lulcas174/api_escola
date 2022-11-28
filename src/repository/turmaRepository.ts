import { EntityRepository, Repository } from "typeorm";
import { Turma } from './../models/Turma';


@EntityRepository(Turma)
export class TurmaRepository extends Repository<Turma> {

}