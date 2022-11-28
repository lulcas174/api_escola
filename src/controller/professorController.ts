import { Request, Response } from 'express';
import { ProfessorService } from '../service/professorService';


export class ProfessorController {

	public static index = async (req: Request, res: Response) => {
		const professorService = new ProfessorService();
		const professores = await professorService.index();
		res.status(200).json(professores);
	}

	public static create = async (req: Request, res: Response) => {
		const professorService = new ProfessorService();
		const professor = req.body;
		const idTurmas = req.body['turma'];
		const newProfessor = await professorService.create(professor, idTurmas);
		res.status(201).json(newProfessor);
	}

	public static update = async (req: Request, res: Response) => {
		const professorService = new ProfessorService();
		const professor = req.body;
		const id = req.params.id;
		const updateProfessor = await professorService.update(professor, Number(id));
		res.status(200).json(updateProfessor).send('Professor editado com sucesso.');
	}

	public static delete = async (req: Request, res: Response) => {
		const professorService = new ProfessorService();
		const id = req['params']['id'];
		res.status(204).send(professorService.delete(Number(id)));
	}
}