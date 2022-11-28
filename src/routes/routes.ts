import { Router } from 'express';
import AlunoRoutes from './alunoRoutes';
import BoletimRoutes from './boletimRoutes';
import EscolaRoutes from "./EscolaRoutes";
import ProfessorRoutes from './professorRoute';
import TurmaRoutes from './turmaRoutes';

const router = Router();

router.use('/escola', EscolaRoutes);
router.use('/professor', ProfessorRoutes);
router.use('/aluno', AlunoRoutes);
router.use('/turma', TurmaRoutes);
router.use('/boletim', BoletimRoutes);


export default router;