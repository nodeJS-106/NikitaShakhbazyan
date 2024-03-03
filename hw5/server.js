const express = require('express')
const app = express()
const dotenv = require('dotenv')
const {gettingDatas,gettingData,creatingData,puttingData,deletingData} = require('./controller/controller')
dotenv.config();

const port = process.env.PORT || 3006

app.use(express.json())
app.use('/app',require('./routes/routes'))

app.listen(process.env.PORT,()=>{
    console.log('Server is on')
}) 