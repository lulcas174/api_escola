import { DeepPartial, getConnection } from 'typeorm';
import { AlunoRepository } from '../repository/alunoRepository';
import { TurmaRepository } from '../repository/turmaRepository';
import { Aluno } from './../models/Aluno';


export class AlunoService {
  private alunoRepository: AlunoRepository;
  private turmaRepository: TurmaRepository;
  
  constructor(){
    this.alunoRepository = getConnection().getCustomRepository(AlunoRepository);
    this.turmaRepository = getConnection().getCustomRepository(TurmaRepository);
  }

  public index = async () => {
    const alunos = await this.alunoRepository.find();
    return alunos;
  } 

  public create = async (aluno: DeepPartial<Aluno>,turma?:Number) => {
    if (turma) {
      const newTurmas = await this.turmaRepository.findOneOrFail(String(turma));
      const newAluno = this.alunoRepository.create({...aluno, turma: newTurmas});
      return this.alunoRepository.save(newAluno);
    } else {
      const newAlunoWithoutTurma = this.alunoRepository.create(aluno);
      return this.alunoRepository.save(newAlunoWithoutTurma);
    }
  
  } 

  public update =  async(aluno: DeepPartial<Aluno>, id: number) => {
    // O aluno não pode atualizar o próprio boletim.
    const alun = await this.alunoRepository.findOneOrFail(id);
    await this.alunoRepository.update({turma: {id}},{turma: null});
    const newAluno = this.alunoRepository.create({...alun, ...aluno, id});
    return this.alunoRepository.save(newAluno);
  } 

  public delete = async (id: number) => {
    return await this.alunoRepository.delete(id);
  } 
}