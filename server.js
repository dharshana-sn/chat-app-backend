const express = require('express');
const mongoose = require('mongoose')
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
require('dotenv').config();


const app = express();
const server = http.createServer(app);
const io= socketIO(server,{
    cors:{
        origin: '*',
        methods:['GET', 'POST']
    }
});
 const authRoutes = require('./routes/authRoutes.js');
 const messageRoutes = require('./routes/messageRoutes.js');


 app.use(cors());
 app.use(express.json());


 app.use('/api/auth', authRoutes);
 app.use('/app/message', messageRoutes);

 mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));