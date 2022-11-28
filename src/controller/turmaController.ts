import { Request, Response } from 'express';
import { Turma } from './../models/Turma';
import { TurmaService } from './../service/turmaService';


export class TurmaController {

   public static index = async(req: Request, res: Response) => {
        const turmaService = new TurmaService();
        const turmas = await turmaService.index();
        res.status(200).json(turmas);
   }

   public static create = async(req: Request, res: Response) => {
        const turmaService = new TurmaService();
        const turma = req.body;
     //    const idProfessor = req.body['professor'];
     //    const idAlunos = req.body['alunos'];
        const newTurma = await turmaService.create(turma);
        res.status(201).json(newTurma);
   }

   public static update = async(req: Request, res: Response) => {
        const turmaService = new TurmaService();
        const turma = req.body as Turma;
        const id = req.params.id;
        const updateTurma = await turmaService.update(turma, Number(id));
        res.status(200).json(updateTurma).send('Turma editada com sucesso.');
   }

   public static delete = async (req: Request, res: Response) => {
        const turmaService = new TurmaService();
        const id =  req['params']['id'];
        res.status(204).send(turmaService.delete(Number(id)));
   }
}