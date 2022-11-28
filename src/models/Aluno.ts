import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Modulos } from '../utils/enums/modulos';
import { Boletim } from './Boletim';
import { Turma } from './Turma';


@Entity('aluno')
export class Aluno {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    numeroMatricula: string;

    @ManyToOne('Turma', (turma:Turma) => turma.alunos, {onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn()
    turma: Turma | null;

    @Column({type: 'enum', enum: Modulos, nullable: true, default: Modulos.MODULO_1})
    disciplina: Modulos;

    @OneToOne(() => Boletim, (boletim) => boletim.aluno, {onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true})
    @JoinColumn()
    boletim: Boletim | null;
}