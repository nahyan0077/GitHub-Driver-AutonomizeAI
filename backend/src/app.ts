import express, { Application, Request, Response } from 'express'
import {config} from 'dotenv'
import database from './config/database'
import { userRoutes } from './routes/userRoutes'
import morgan from 'morgan'
import cors from 'cors'
import errorMiddleware from './middlewares/errorMiddleware'

config()
database()

const app: Application = express()
const PORT : number = Number(process.env.PORT)


app.use(morgan('dev'))
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))


//routes
app.use('/user',userRoutes())


//Not found handlerss
app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "API Not found" });
});
  

//error middleware
app.use(errorMiddleware)


app.listen(3000,()=>{
    console.log(`🍃 Server is listening on port ${PORT} 🍃`);
})
