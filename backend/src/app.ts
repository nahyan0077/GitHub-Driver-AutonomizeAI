import express, { Application } from 'express'
import {config} from 'dotenv'
import database from './config/database'
import { userRoutes } from './routes/userRoutes'
import morgan from 'morgan'
import cors from 'cors'

config()
database()

const app: Application = express()
const PORT : number = Number(process.env.PORT)


app.use(morgan('dev'))
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))




app.use('/user',userRoutes())

app.get('/',(req,res) =>{
    console.log("sdf");
    res.json({he:"hee"})
}) 

app.listen(3000,()=>{
    console.log(`🍃 Server is listening on port ${PORT} 🍃`);
})
