import { Request, Response } from 'express';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../service/alunoService';


export class AlunoController {

   public static index = async(req: Request, res: Response) => {
        const alunoService = new AlunoService();
        const alunos = await alunoService.index();
        res.status(200).json(alunos);
   }

   public static create = async(req: Request, res: Response) => {
        const alunoService = new AlunoService();
        const aluno = req.body;
        const idTurma = req.body['turma'];
        const newAluno = await alunoService.create(aluno, idTurma);
        res.status(201).json(newAluno);
   }

   public static update = async(req: Request, res: Response) => {
        const alunoService = new AlunoService();
        const aluno = req.body as Aluno;
        const id = req.params.id;
        const updateAluno = await alunoService.update(aluno, Number(id));
        res.status(200).send('Aluno editado com sucesso.');
   }

   public static delete = async (req: Request, res: Response) => {
        const alunoService = new AlunoService();
        const id =  req['params']['id'];
        res.status(204).send(alunoService.delete(Number(id)));
   }
}