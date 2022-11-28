import { Router } from 'express';
import { TurmaController } from '../controller/turmaController';

const TurmaRoutes = Router();

TurmaRoutes.get('/pegarTodas', TurmaController.index);
TurmaRoutes.post('/criar', TurmaController.create);
TurmaRoutes.put('/editar/:id', TurmaController.update);
TurmaRoutes.delete('/deletar/:id', TurmaController.delete);


export default TurmaRoutes;