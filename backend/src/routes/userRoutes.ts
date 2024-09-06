import {Router} from 'express'
import { createUserData, deleteUser, getUsers } from '../controllers/userController'


export const userRoutes = () => {
    const router = Router()

    router.get('/create-user/:username',createUserData)

    router.get('/get-users',getUsers)

    router.delete('/delete-user/:id',deleteUser)

    return router

}