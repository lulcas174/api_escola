import { EntityRepository, Repository } from "typeorm";
import { Boletim } from './../models/Boletim';


@EntityRepository(Boletim)
export class BoletimRepository extends Repository<Boletim> {

}