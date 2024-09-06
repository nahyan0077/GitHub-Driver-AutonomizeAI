import {Router} from 'express'
import { createUserData } from '../controllers/userController'


export const userRoutes = () => {
    const router = Router()

    router.get('/create-user/:username',createUserData)

    return router
}