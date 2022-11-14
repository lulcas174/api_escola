import { Router } from 'express';
import { EscolaRoutes } from './escola/EscolaRoutes';

export const router = Router();

router.use('/escola', EscolaRoutes);

