import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

import { Modulo } from './Modulo';
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

    @OneToOne(() => Modulo)
    @JoinColumn()
    module: Modulo;

    @ManyToOne(() => Turma, (turma) => turma.alunos)
    turma: Turma;


    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}