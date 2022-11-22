import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { EscolaInterface } from '../../interfaces/EscolaInterface';
import { Escola } from '../../models/Escola';


export class EscolaController {
    public static async getAll(req: Request, res: Response) {
        const escolaRepository = getRepository(Escola);

        const escolas = await escolaRepository.find({
            select: ['id', 'nome', 'cnpj', 'logo', 'rua', 'numero', 'bairro', 'cidade', 'cep']
        });

        res.status(200).json(escolas);
    }

    public static async getById(req: Request, res: Response) {
        const id = req.params.id;

        const escolaRepository = getRepository(Escola);

        try {
            const escola = await escolaRepository.findOneOrFail(id, {
                select: ['nome', 'cnpj', 'logo', 'rua', 'numero', 'bairro', 'cidade', 'cep']
            });
            res.send(escola);
        } catch (error) {
            res.status(404).send("escola não encontrada");
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            const { nome, cnpj, logo, rua, numero, bairro, cidade, cep } = req.body;
            const requestData = { nome, cnpj, logo, rua, numero, bairro, cidade, cep } as EscolaInterface;

            const escolaRepository = getRepository(Escola);
            const data = escolaRepository.create(requestData);
            escolaRepository.save(data);

            res.status(201).json({ message: 'Escola criada!' });
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Erro ao criar escola!' });
        }

    }

    public static async edit(req: Request, res: Response) {
        const id = req.params.id;

        const { nome, cnpj, logo, rua, numero, bairro, cidade, cep } = req.body;

        const escolaRepository = getRepository(Escola);
        try {
            await escolaRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("escola não encontrada");
            return;
        }

        const requestData = { nome, cnpj, logo, rua, numero, bairro, cidade, cep } as EscolaInterface;


        try {
            await escolaRepository.save(requestData);
        } catch (e) {
            res.status(409).send(e);
            return;
        }
        res.status(204).send();
    };

    public static async delete(req: Request, res: Response) {
        const id = req.body.id;

        const escolaRepository = getRepository(Escola);
        let escola: Escola;
        try {
            escola = await escolaRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Escola não encontrada");
            return;
        }
        escolaRepository.delete(id);

        res.status(204).send();
    }

}