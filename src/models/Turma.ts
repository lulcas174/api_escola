import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Aluno } from './Aluno';
import { Professor } from './Professor';

@Entity('turma')
export class Turma {

    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @OneToOne(() => Professor) @JoinColumn()
    professor: Professor;

    @OneToMany(() => Aluno, (aluno) => aluno.turma)
    alunos: Aluno[];

    @Column()
    disciplina: string;

    
    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}