const express = require('express')
const app = express()
const dotenv = require('dotenv')
const errorHandler = require('./middleware/errorHandler')
dotenv.config();

const port = process.env.PORT || 3006

app.use(express.json())
app.use('/app',require('./routes/routes'))
app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log('Server is on')
}) 