import { Router } from 'express';
import EscolaRoutes from "./escola/EscolaRoutes";

const router = Router();

router.use('/escola', EscolaRoutes);


export default router;