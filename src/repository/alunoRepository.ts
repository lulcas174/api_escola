import { EntityRepository, Repository } from "typeorm";
import { Aluno } from './../models/Aluno';


@EntityRepository(Aluno)
export class AlunoRepository extends Repository<Aluno> {

}