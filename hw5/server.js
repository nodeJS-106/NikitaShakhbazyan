const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();

const port = process.env.PORT || 3006

app.get('/app',(req,res)=>{
    res.status(200).json({message : "Getting data"})
})
app.get('/app/:id',(req,res)=>{
    res.status(200).json({message : `Getting data from user with ${req.params.id} id` })
})
app.post('/app',(req,res) => {
    res.status(201).json({message:"Creating data"})
})
app.put('/app/:id',(req,res)=> {
    res.status(200).json({message : `Changing data of user with id : ${req.params.id}`})
})
app.delete('/app/:id',(req,res) => {
    res.status(200).json({message : `Deeting data of user with id : ${req.params.id}`})
})

app.listen(process.env.PORT,()=>{
    console.log('Server is on')
}) 