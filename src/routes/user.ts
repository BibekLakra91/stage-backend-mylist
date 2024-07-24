import  express  from "express";

import controller from '../controllers/user'

const router = express.Router()

router.post('/create',controller.createUser)
router.get('/get/:userId',controller.readUser)
router.get('/get',controller.readAll)
router.patch('/update',controller.updateUser)
router.delete('/delete',controller.deleteUser)


export default router



