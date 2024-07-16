import  express  from "express";

import controller from '../controllers/movie'

const router = express.Router()

router.post('/create',controller.createMovie)
router.get('/get/:movieId',controller.readMovie)
router.get('/get',controller.readAll)
router.patch('/update/:movieId',controller.updateMovie)
router.delete('/delete/:movieId',controller.deleteMovie)


export default router



