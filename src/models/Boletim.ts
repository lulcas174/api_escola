import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Aluno } from './Aluno';

@Entity('boletim')
export class Boletim {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    notaFinal: string;

    @Column()
    aprovado: boolean;

    @OneToOne(() => Aluno, (aluno) => aluno.boletim, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    aluno: Aluno | null;


    constructor(){
       
    }
}