import { Router } from "express";
import { ProfessorController } from "../controller/professorController";

const ProfessorRoutes = Router();

ProfessorRoutes.get('/pegarTodas', ProfessorController.index);
ProfessorRoutes.post('/criar', ProfessorController.create);
ProfessorRoutes.put('/editar/:id', ProfessorController.update);
ProfessorRoutes.delete('/deletar/:id', ProfessorController.delete);

export default ProfessorRoutes;