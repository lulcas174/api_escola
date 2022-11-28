import { DeepPartial, getConnection } from 'typeorm';
import { Turma } from '../models/Turma';
import { AlunoRepository } from '../repository/alunoRepository';
import { ProfessorRepository } from '../repository/professorRepository';
import { TurmaRepository } from './../repository/turmaRepository';


export class TurmaService {
  private turmaRepository: TurmaRepository;
  private professorRepository: ProfessorRepository;
  private alunoRepository: AlunoRepository;

  constructor(){
    this.turmaRepository = getConnection().getCustomRepository(TurmaRepository);
    this.professorRepository = getConnection().getCustomRepository(ProfessorRepository);
    this.alunoRepository = getConnection().getCustomRepository(AlunoRepository);
  }

  public index = async () => {
    return await this.turmaRepository.find({relations: ['professor', 'alunos']});
  } 

  public create = async (turma: DeepPartial<Turma>) => {
    const newTurmas = await this.turmaRepository.save(turma);
    return newTurmas;
    // const newProfessor = await this.professorRepository.findOneOrFail(String(professorID));
    // const newAlunos = await this.alunoRepository.findByIds(alunosID);
    // const newTurma = this.turmaRepository.create({...turma, professor: newProfessor, alunos: newAlunos});
    // return  this.turmaRepository.save(newTurma);
  } 

  public update =  async(turma: DeepPartial<Turma>, id: number) => {
    const turm = await this.turmaRepository.findOneOrFail(id);
    // uma turma não pode atualizar seu professor nem seus alunos
    // await this.professorRepository.update({turma: {id}},{turma: null});
    // await this.alunoRepository.update({turma: {id}}, {turma: null});
    const newTurma = this.turmaRepository.create({...turm, ...turma, id});
    return this.turmaRepository.save(newTurma);
  } 

  public delete = async (id: number) => {
    return await this.turmaRepository.delete(id);
  } 
}