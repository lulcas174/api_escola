import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professor')
export class Professor {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    nome!: string;

    @Column({ unique: true })
    cpf!: string;

    @Column()
    tituloAcademico!: string;

    @Column()
    disciplinaFixa!: string;

    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}