import { Request, Response, Router } from 'express';
import { getRepository } from "typeorm";
import { EscolaInterface } from '../../interfaces/EscolaInterface';
import { Escola } from '../../models/Escola';
import { EscolaService } from '../../service/escolaService';


export class EscolaController {

   public static index = async(req: Request, res: Response) => {
        const escolaService = new EscolaService();
        const escolas = await escolaService.index();
        res.status(200).json(escolas);
   }

   public static create = async(req: Request, res: Response) => {
        const escolaService = new EscolaService();
        const escola = req.body as Escola;
        const newEscola = await escolaService.create(escola);
        res.status(201).json(newEscola);
   }

   public static update = async(req: Request, res: Response) => {
        const escolaService = new EscolaService();
        const escola = req.body as Escola;
        const id = req.params.id;
        const updateEscola = await escolaService.update(escola, Number(id));
        res.status(200).json(updateEscola).send('Escola editada com sucesso.');
   }

   public static delete = async (req: Request, res: Response) => {
        const escolaService = new EscolaService();
        const id =  req['params']['id'];
        res.status(204).send(escolaService.delete(Number(id)));
   }
}