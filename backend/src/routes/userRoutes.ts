import {Router} from 'express'
import { getUserData } from '../controllers/userController'


export const routes = () => {
    const router = Router()

    router.get('/user.username',getUserData)

    return router
}