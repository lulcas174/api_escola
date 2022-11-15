import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { Aluno } from './Aluno';

@Entity('boletim')
export class Boletim {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    notaFinal: string;

    @Column()
    aprovacao: boolean;

    @OneToOne(() => Aluno) @JoinColumn()
    aluno: Aluno;


    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}