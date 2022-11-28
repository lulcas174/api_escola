import { Router } from 'express';
import { EscolaController } from '../controller/EscolaController';

const EscolaRoutes = Router();

EscolaRoutes.get('/pegarTodas', EscolaController.index);
EscolaRoutes.post('/criar', EscolaController.create);
EscolaRoutes.put('/editar/:id', EscolaController.update);
EscolaRoutes.delete('/deletar/:id', EscolaController.delete);


export default EscolaRoutes;