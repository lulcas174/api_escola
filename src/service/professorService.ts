import { DeepPartial, getConnection } from 'typeorm';
import { Professor } from '../models/Professor';
import { ProfessorRepository } from '../repository/professorRepository';
import { TurmaRepository } from './../repository/turmaRepository';


export class ProfessorService {
  private professorRepository: ProfessorRepository;
  private turmaRepository: TurmaRepository;

  constructor(){
    this.professorRepository = getConnection().getCustomRepository(ProfessorRepository);
    this.turmaRepository = getConnection().getCustomRepository(TurmaRepository);
  }

  public index = async () => {
    return await this.professorRepository.find();
  } 

  public create = async (professor: DeepPartial<Professor>, turma?:Number) => {
    if (turma) {
      const newTurmas = await this.turmaRepository.findOneOrFail(String(turma));
      professor.disciplina = newTurmas?.disciplina;
      const newProfessor = this.professorRepository.create({...professor, turma: newTurmas});
      return this.professorRepository.save(newProfessor);
    } else {
      const newProfessorWithoutTurma = this.professorRepository.create(professor);
      return this.professorRepository.save(newProfessorWithoutTurma);
    }

  } 

  public update =  async(professor: DeepPartial<Professor>, id: number) => {
      const prof = await this.professorRepository.findOneOrFail(id);
      // await this.turmaRepository.update({professor: {id}},{professor: null});
      const newProfessor = this.professorRepository.create({...prof, ...professor, id});
      return this.professorRepository.save(newProfessor);
  }

  public delete = async (id: number) => {
    return await this.professorRepository.delete(id);
  } 
}