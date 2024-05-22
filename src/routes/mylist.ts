import  express  from "express";

import controller from '../controllers/mylist'

const router = express.Router()

router.post('/:userId/add/:movieId',controller.add)
router.get('/get/:userId',controller.mylist)
router.delete('/:userId/delete/:movieId',controller.remove)


export default router



