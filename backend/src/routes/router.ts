import express, { Router } from 'express';
import { contacts, createContact, updateContact, deleteContact } from '../controllers/authControllers';

let contactsList = [
  { id: 1, nombre: 'John', descripcion: 'Amigo', telefono: '123456' },
  { id: 2, nombre: 'Alice', descripcion: 'Familia', telefono: '789012' },
  // ...
];



const router: Router = express.Router();

router.get('/:nombre/:descripcion/:telefono/:contrasenia', contacts);

router.post('/create', createContact);

router.put('/update/:id', updateContact);

router.delete('delete/:id', deleteContact);


export default router;
