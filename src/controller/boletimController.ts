import { Request, Response } from 'express';
import { BoletimService } from './../service/boletimService';


export class BoletimController {

	public static index = async (req: Request, res: Response) => {
		const boletimService = new BoletimService();
		const boletins = await boletimService.index();
		res.status(200).json(boletins);
	}

	public static create = async (req: Request, res: Response) => {
		const boletimService = new BoletimService();
		const boletim = req.body;
		const idAluno = req.body['aluno'];
		const newBoletim = await boletimService.create(boletim, idAluno);
		res.status(201).json(newBoletim);
	}

	public static update = async (req: Request, res: Response) => {
		const boletimService = new BoletimService();
		const boletim = req.body;
		const id = req.params.id;
		const updateBoletim = await boletimService.update(boletim, Number(id));
		res.status(200).json(updateBoletim).send('Professor editado com sucesso.');
	}

	public static delete = async (req: Request, res: Response) => {
		const boletimService = new BoletimService();
		const id = req['params']['id'];
		res.status(204).send(boletimService.delete(Number(id)));
	}
}