require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routers/web')
const APIRouter = require('./routers/api')
const app =  express()
const port = process.env.PORT || 8080

//config view engine
configViewEngine(app)

//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//config route
app.use('/', webRouter)

//config api
app.use('/api/v1/',APIRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})