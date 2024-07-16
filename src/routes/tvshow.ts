import  express  from "express"
import controller from '../controllers/tvshow'

const router = express.Router()

router.post('/create',controller.createTvshow)
router.get('/get/:tvshowid',controller.readTvshow)
router.get('/get',controller.readAll)
router.patch('/update/:tvshowid',controller.updateTvshow)
router.delete('/delete/:tvshowid',controller.deleteTvshow)


export default router



