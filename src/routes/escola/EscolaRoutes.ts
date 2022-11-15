import { Router } from 'express';
import { EscolaController } from '../../controller/escola/EscolaController';

const EscolaRoutes = Router();

EscolaRoutes.get('/pegarTodas', EscolaController.getAll);
EscolaRoutes.post('/criar', EscolaController.create);


export default EscolaRoutes;