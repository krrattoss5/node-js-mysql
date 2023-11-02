//const express = require("express")
import express from 'express'
import route from './routes/employes.routes.js'
import router from './routes/index.routes.js'
import { config } from 'dotenv'
config()

const app = express()
app.use(express.json())

app.use('/api',route)
app.use('/api',router)

app.use((re,res,next)=>{
  res.status(404).json({
    message: "EndPoint not Found!"
  })
  next()
})

export default app;