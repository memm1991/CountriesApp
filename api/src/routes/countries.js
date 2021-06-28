const {Router} = require('express')
const router = Router()
const {getCbyName,getAllC,getCbyId}= require('./controllers')
//
router.get('/',async(req,res)=>{
    try{
        if(req.query.name){
            let response=await getCbyName(req.query.name)
            return res.status(200).send(response)
        }
        let response= await getAllC()
        return res.status(200).send(response)

    }catch(error){
        console.log(error)
    }

})
router.get('/:idPais',async (req,res)=>{ 
    try{
        let response = await getCbyId(req.params.idPais)
        res.status(200).send(response)

    }catch(error){
        console.log(error)
    }
})



module.exports=router