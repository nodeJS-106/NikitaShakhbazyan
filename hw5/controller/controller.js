
const gettingDatas = (req,res)=>{
    res.status(200).json({message : "Getting data"})
}

const gettingData = (req,res)=>{
    res.status(200).json({message : `Getting data from user with ${req.params.id} id` })
}

const creatingData = (req,res) => {
    res.status(201).json({message:"Creating data"})
}

const puttingData = (req,res)=> {
    res.status(200).json({message : `Changing data of user with id : ${req.params.id}`})
}

const deletingData = (req,res) => {
    res.status(200).json({message : `Deeting data of user with id : ${req.params.id}`})
}

module.exports = {
    gettingDatas,
    gettingData,
    creatingData,
    puttingData,
    deletingData
}