import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import logging from './config/logging'
import config from './config/config'
import mongoose from 'mongoose'
import userRoutes from './routes/user'
import movieRoutes from './routes/movie'
import listRoutes from './routes/mylist'
import tvshowRoutes from './routes/tvshow'



const NAMESPACE= 'Server'
const router = express()


//connect to mongoDB
mongoose.connect(config.mongo.url)
  .then(() => console.log('MongoDB connected!!'))
  .catch(err => console.log(err));


  //logging
router.use((req,res,next)=>{
  logging.info(NAMESPACE,`METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`)

  res.on('finish',()=>{
      logging.info(NAMESPACE,`METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`)

  })
  next()
})


//parse the request
router.use(bodyParser.urlencoded({extended :false}))
router.use(bodyParser.json());

//Routes
router.use('/user',userRoutes)
router.use('/movie',movieRoutes)
router.use('/mylist',listRoutes)
router.use('/tvshow',tvshowRoutes)

// error handling
router.use((req,res,next)=>{
  const error = new Error('not found')
  return res.status(404).json({
      messege:error.message
  })
  next()
})


const httpServer = http.createServer(router)
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`))

// mongoose.connection.close()
// httpServer.close()

//syntax changed to correct 'app.listen is not a function'
module.exports=httpServer