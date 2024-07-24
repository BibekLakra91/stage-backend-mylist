import  express  from "express";

import controller from '../controllers/mylist'

const router = express.Router()

router.post('/:userId/add/:itemId',controller.add)
router.get('/:userId/get',controller.mylist)
router.delete('/:userId/delete/:itemId',controller.remove)


export default router



