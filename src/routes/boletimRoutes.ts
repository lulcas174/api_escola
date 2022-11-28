import { Router } from "express";
import { BoletimController } from "../controller/boletimController";

const BoletimRoutes = Router();

BoletimRoutes.get('/pegarTodas', BoletimController.index);
BoletimRoutes.post('/criar', BoletimController.create);
BoletimRoutes.put('/editar/:id', BoletimController.update);
BoletimRoutes.delete('/deletar/:id', BoletimController.delete);

export default BoletimRoutes;