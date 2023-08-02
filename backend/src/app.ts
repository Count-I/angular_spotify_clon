import express, { Express } from 'express';
import router from '../routes/router';

const app: Express = express();
app.use(express.json());
app.use('/contacts', router);
app.use('/',(req,res)=>{
  res.status(200).json({"s":"s"})
})
app.listen(3000, () => {
  console.log("conectado a localhost//3000");
});
