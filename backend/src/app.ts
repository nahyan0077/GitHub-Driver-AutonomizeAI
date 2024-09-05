import express, { Application } from 'express'
import {config} from 'dotenv'
import database from './config/database'


config()
database()

const app: Application = express()
const PORT : number = Number(process.env.PORT)




app.listen(3000,()=>{
    console.log(`🍃 Server is listening on port ${PORT} 🍃`);
})