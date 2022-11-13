import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { Aluno } from './Aluno';

@Entity('boletim')
export class Boletim {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    notaFinal!: number;

    @Column()
    aprovacao!: boolean;

    @OneToOne(() => Aluno) @JoinColumn()
    aluno!: Aluno;


    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}