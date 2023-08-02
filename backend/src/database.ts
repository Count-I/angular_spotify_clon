
import express from 'express'
const mongoose = require('mongoose');

mongoose.promise  = global.Promise;
const urlDb= "mongodb+srv://proyecto:sena12345@cluster0.tg5tnsm.mongodb.net/";
mongoose.connect(urlDb)
.then((mongoose: any) =>console.log("db conectada en atlas"))
.catch((err: any) =>console.log(err))

