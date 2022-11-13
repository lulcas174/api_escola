import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

import { Modulo } from './Modulo';
import { Turma } from './Turma';

@Entity('aluno')
export class Aluno {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    nome!: string;

    @Column({ unique: true })
    cpf!: string;

    @Column()
    numeroMatricula!: number;

    @OneToOne(() => Modulo) @JoinColumn()
    modulo!: Modulo;

    @ManyToOne(() => Turma, (turma) => turma.alunos)
    turma: Turma;


    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}