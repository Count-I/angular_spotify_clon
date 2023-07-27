import express from 'express'; 

// initializations
const app = express();

//settings
app.set('port', 3000)

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Funcionandig, Server on port ${app.get('port')}`);
});

