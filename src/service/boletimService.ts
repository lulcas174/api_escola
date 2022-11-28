import { DeepPartial, getConnection } from 'typeorm';
import { Boletim } from '../models/Boletim';
import { BoletimRepository } from '../repository/boletimRepository';
import { AlunoRepository } from './../repository/alunoRepository';


export class BoletimService {
  private boletimRepository: BoletimRepository;
  private alunoRepository: AlunoRepository;

  constructor() {
    this.boletimRepository = getConnection().getCustomRepository(BoletimRepository);
    this.alunoRepository = getConnection().getCustomRepository(AlunoRepository);
  }

  public index = async () => {
    return await this.boletimRepository.find({ relations: ['aluno'] });
  }

  public create = async (boletim: DeepPartial<Boletim>, aluno: Number) => {
    const newAluno = await this.alunoRepository.findOne(String(aluno));
    const newBoletim = this.boletimRepository.create({ ...boletim, aluno: newAluno });
    return this.boletimRepository.save(newBoletim);
  }

  public update = async (boletim: DeepPartial<Boletim>, id: number) => {
    const bole = await this.boletimRepository.findOneOrFail(id);
    await this.alunoRepository.update({ boletim: { id } }, { boletim: null });
    const newBoletim = this.boletimRepository.create({ ...bole, ...boletim, id });
    return this.boletimRepository.save(newBoletim);
  }

  public delete = async (id: number) => {
    return await this.boletimRepository.delete(id);
  }
}