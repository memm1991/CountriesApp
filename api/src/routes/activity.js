const {Router} = require('express')
const router = Router()
const {createAc,allact}= require('./controllers')

router.post('/', async(req,res,next)=>{
    try{
        let response = await createAc(req.body)//req.body=[{name,dificulty,duration,id,season},['ARG','ATF']]
        res.status(200).send('Activity Created')
    }catch(error){
        next(error)
    }
})
       

router.get('/', async(req,res)=>{
    try{
        let resp= await allact()
        res.status(200).send(resp)

    }catch(error){
        console.log(error)
    }
})

module.exports=router