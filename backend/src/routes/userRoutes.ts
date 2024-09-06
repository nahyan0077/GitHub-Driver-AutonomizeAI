import {Router} from 'express'
import { createUserData, getUsers } from '../controllers/userController'


export const userRoutes = () => {
    const router = Router()

    router.get('/create-user/:username',createUserData)

    router.get('/get-users',getUsers)

    return router

}