import express, { Request, Response, Router } from 'express';
// import { authController } from '../controllers/authController';
// import { conexion } from '../database/db';

const router: Router = express.Router();

// router para las vistas

router.get('/contacts', (req: Request, res: Response) => {
  // conexion();
  res.render('index');
});

router.get('/login', (req: Request, res: Response) => {
  res.render('login');
});

router.get('/register', (req: Request, res: Response) => {
  res.render('register');
});

export default router;
