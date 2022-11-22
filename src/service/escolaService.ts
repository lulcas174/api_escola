import { getConnection } from 'typeorm';
import { Escola } from "../models/Escola";
import { EscolaRepository } from '../repository/escolaRepository';


export class EscolaService {
  private escolaRepository: EscolaRepository;

  constructor(){
    this.escolaRepository = getConnection().getCustomRepository(EscolaRepository);
  }

  public index = async () => {
    const escolas = await this.escolaRepository.find()
    return escolas;
  } 

  public create = async (escola: Escola) => {
    const newEscolas = await this.escolaRepository.save(escola);
    return newEscolas;
  } 

  public update =  async(escola: Escola, id: number) => {
    const updateEscola = await this.escolaRepository.update(id, escola);
    return updateEscola;
  } 

  public delete = async (id: number) => {
    const deleteEscola = await this.escolaRepository.delete(id);
    return deleteEscola;
  } 
}