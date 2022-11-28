import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Disciplina } from '../utils/enums/disciplinas';
import { Turma } from './Turma';

@Entity('professor')
export class Professor {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    tituloAcademico: string;

    @Column({type: 'enum', enum: Disciplina, nullable: true, default: null})
    disciplina: Disciplina;

    @OneToOne(() => Turma, (turma) => turma.professor, {nullable:true, eager: true})
    @JoinColumn()
    turma: Turma | null;
    
    constructor(){
       
    }
}