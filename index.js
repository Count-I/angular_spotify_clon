import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
// import { connect } from "mongoose";
// import message from './models/message.js'
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});
const user_number = 11
const chats= []

// const connectDB = async () => {
//   try {
//     await connect('mongodb://localhost/websocketsdb');
//     console.log('connected to database succesfully');
//   } catch (error) {
//     console.log("Cant connect to database: " + error);
//   }
// }



io.on('connection', (socket) => {
  socket.on('join', (data) => {
      socket.join(data.room);
      socket.broadcast.to(data.room).emit('user joined');
  });

  socket.on('get all messages', (room)=>{
    console.log(room);
    io.in(room).emit('all messages', chats)
  })

  socket.on('message', (data) => {
    chats.push(data)
      // io.in(data.room).emit('new message', {user: data.user, message: data.message});
      io.in(data.room).emit('new message', chats);
      // io.emit('new message', {user: data.user, message: data.message});
      // console.log(chats);
  });
});

// connectDB();

httpServer.listen(3000);