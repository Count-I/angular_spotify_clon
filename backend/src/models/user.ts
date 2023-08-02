import { Schema, model } from "mongoose";


//tabla base de datos

const userSchema = new Schema({
    nombre:{
        type:String,
        required: true,
    },

    img_url:{
        type:String

    },

    estado:{
        type:String,
        required:true,
    },

    numeroTelefono:{
        type:Number,
        default:1,
    },

    contrasenia:{
        type:String,
        required:true,

    },
});


export default model("user",userSchema)