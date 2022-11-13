import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modulo')
export class Modulo {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    nome!: string;

    @Column()
    numeroModulo!: number;

    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}