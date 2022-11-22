import { Router } from 'express';
import { EscolaController } from '../../controller/escola/EscolaController';

const EscolaRoutes = Router();

EscolaRoutes.get('/pegarTodas', EscolaController.getAll);
EscolaRoutes.post('/criar', EscolaController.create);
EscolaRoutes.get('/pegarPorID/:id([0-9]+)', EscolaController.getById);
EscolaRoutes.post('/editar/:id([0-9]+)', EscolaController.edit);
EscolaRoutes.delete('/deletar', EscolaController.delete);


export default EscolaRoutes;