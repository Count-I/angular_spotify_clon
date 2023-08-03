import express from 'express'; 
const mongoose = require('mongoose');

// initializations
const app = express();

//settings
app.set('port', 3000)
mongoose.promise  = global.Promise;
const urlDb= "mongodb+srv://proyecto:sena12345@cluster0.tg5tnsm.mongodb.net/";
mongoose.connect(urlDb)
    .then((mongoose: any) =>console.log("db conectada en atlas"))
    .catch((err: any) =>console.log(err))



//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Funcionanding, Server on port ${app.get('port')}`);
});
