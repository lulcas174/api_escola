import { EntityRepository, Repository } from "typeorm";
import { Professor } from "../models/Professor";


@EntityRepository(Professor)
export class ProfessorRepository extends Repository<Professor> {

}