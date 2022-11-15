import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modulo')
export class Modulo {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    numeroModulo: string;

    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}