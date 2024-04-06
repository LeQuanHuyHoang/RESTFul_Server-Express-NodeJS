require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./configs/viewEngine')

const app =  express()
const port = process.env.PORT || 8080

//config view engine
configViewEngine(app)

//config static file


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})