import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Disciplina } from '../utils/enums/disciplinas';
import { Aluno } from './Aluno';
import { Professor } from './Professor';

@Entity('turma')
export class Turma {

    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @OneToOne(() => Professor, (professor) => professor.turma, {nullable: true})
    professor: Professor | null;

    @OneToMany(() => Aluno, (aluno) => aluno.turma, {onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable:true})
    alunos: Aluno[];

    @Column({type: 'enum', enum: Disciplina, nullable: true, default: null})
    disciplina: Disciplina;

    constructor(){
     
    }
}