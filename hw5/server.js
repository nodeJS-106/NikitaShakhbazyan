const express = require('express')
const app = express()
const dotenv = require('dotenv')
const {gettingDatas,gettingData,creatingData,puttingData,deletingData} = require('./controller/controller')
dotenv.config();

const port = process.env.PORT || 3006

app.get('/app',gettingDatas)
app.get('/app/:id',gettingData)
app.post('/app',creatingData)
app.put('/app/:id',puttingData)
app.delete('/app/:id',deletingData)

app.listen(process.env.PORT,()=>{
    console.log('Server is on')
}) 