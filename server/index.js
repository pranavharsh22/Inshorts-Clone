import express from 'express'
import Connection from './database/db.js';
import DefaultData from './default.js';
import route from './routes/route.js';
import dotenv from 'dotenv'
import cors from 'cors'
const app=express()
dotenv.config();
app.use(cors())
app.use('/',route)
const PORT=8000;
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
Connection(username,password)
app.listen(PORT,()=>console.log(`Server Running successfully on Port ${PORT}`))

DefaultData();