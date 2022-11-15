import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('escola')
export class Escola {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    cnpj: string;
    
    @Column()
    logo: string;

    @Column()
    rua: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    cep: string;
}