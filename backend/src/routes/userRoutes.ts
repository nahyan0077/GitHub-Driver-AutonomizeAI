import {Router} from 'express'
import { getUserData } from '../controllers/userController'


export const userRoutes = () => {
    const router = Router()

    router.get('/get-user/:username',getUserData)

    return router
}