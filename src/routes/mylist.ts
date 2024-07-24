import  express  from "express";

import controller from '../controllers/mylist'

const router = express.Router()

router.post('/add',controller.add)
router.get('/get',controller.mylist)
router.delete('/delete',controller.remove)


export default router



