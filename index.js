//const express = require("express")
import express from 'express'
import route from './src/routes/employes.routes.js'
import router from './src/routes/index.routes.js'

const app = express()

app.use('/',route)
app.use('/',router)

app.listen(3000,()=>console.log('running on http://localhost:3000/'))