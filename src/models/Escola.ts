import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('escola')
export class Escola {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    nome!: string;

    @Column({ unique: true })
    cnpj!: string;
    
    @Column()
    logo!: string;

    @Column()
    rua!: string;

    @Column()
    numero!: number;

    @Column()
    bairro!: string;

    @Column()
    cidade!: string;

    @Column()
    cep!: string;

    constructor(){
        if(!this.id){
            this.id = Math.random();
        }
    }
}