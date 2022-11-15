import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    disciplinaFixa: string;

    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}