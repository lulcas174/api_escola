import { Router } from 'express';
import { AlunoController } from '../controller/alunoController';

const AlunoRoutes = Router();

AlunoRoutes.get('/pegarTodas', AlunoController.index);
AlunoRoutes.post('/criar', AlunoController.create);
AlunoRoutes.put('/editar/:id', AlunoController.update);
AlunoRoutes.delete('/deletar/:id', AlunoController.delete);


export default AlunoRoutes;