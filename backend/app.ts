import express, { Express } from 'express';
import router from './routes/router';

const app: Express = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/contacts', router);
app.use('/contacts/guardar_contacto', router);
app.use('/contacts/contacto_actualizar', router);
app.use('/contacts/contacto_eliminar', router);

app.listen(3000, () => {
  console.log("conectado a localhost://3000");
});
