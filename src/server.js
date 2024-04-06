require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routers/web')
const app =  express()
const port = process.env.PORT || 8080

//config view engine
configViewEngine(app)

//config static file


app.use('/', webRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})