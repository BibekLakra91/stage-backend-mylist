import  express  from "express"
import controller from '../controllers/tvshow'

const router = express.Router()

router.post('/create',controller.createTvshow)
router.get('/get/:tvshowId',controller.readTvshow) 
router.get('/get',controller.readAll)
router.patch('/update',controller.updateTvshow)
router.delete('/delete',controller.deleteTvshow) 


export default router



