import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { Aluno } from './Aluno';
import { Professor } from './Professor';

@Entity('turma')
export class Turma {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    turma!: string;

    @OneToOne(() => Professor) @JoinColumn()
    professor!: Professor;

    @OneToMany(() => Aluno, (aluno) => aluno.turma)
    alunos: Aluno[];

    @Column()
    disciplina!: string;

    
    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}