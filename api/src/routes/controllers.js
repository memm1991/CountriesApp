const {Countries,Activities}= require('../db')
const { Op } = require("sequelize");


async function getCbyName (name){
    try{
        let filter= await getAllC()
        let resp=[]
        filter.forEach(el=>el.name.toLowerCase().indexOf(name.toLowerCase())>-1?resp.push(el):el)
        return resp

    }catch(error){
        console.log(error)
    }
 
};

async function getAllC(){
    try{
        let All= await Countries.findAll({
            include:{
                model:Activities,
                attributes:['name','dificulty','duration','season'],
                through:{
                    attributes:[]
                }
            }
        })
        
        let AllFilter= All.map(el=>{
            return {
                flag:el.getDataValue('flag'),
                name:el.getDataValue('name'),
                continent:el.getDataValue('continent'),
                id:el.getDataValue('id'),
                capital:el.getDataValue('capital')||'blank',
                subregion:el.getDataValue('subregion')|| 'blank',
                population:el.getDataValue('population')|| 'blank',
                area:el.getDataValue('area')|| 'blanck',
                activities:el.getDataValue('Activities') || 'no activities yet',
            }

        })
        return AllFilter

    }catch(error){
        console.log(error)
    }

};

async function getCbyId (id){
    try{
        let array= await getAllC()
        let resp= array.find(el=>el.id==id)
        return resp

    }catch(error){
        console.log(error)
    }

};

async function createAc (paylod){//[{actividad},[ARG,COL,ASF]]
    try{
        let InstAct= await Activities.create(paylod[0])
        paylod[1].forEach(async e =>{
            const pais = await Countries.findOne({
                where:{
                   id:e
                }
            })
            InstAct.addCountries(pais)
        } )
      
        // let promesas=paylod[1].map(el=>Countries.findOne({
        //     where:{
        //         id:el
        //     }
        // }))
        // let act1= Activities.create(paylod[0])
        // // Promise.All([act1,...promesas])
        // // .then(respuesta=>{
        // //     respuesta[0].addCountries(respuesta.slice(1))
        // // })

    
    }catch(error){
        console.log(error)
    }
    
};
async function allact (){
    try{
        let resp= await Activities.findAll()
        return resp.map(el=>(el.getDataValue('name')))

    }catch(error){
        console.log(error)
    }
}
module.exports={
    getCbyName,
    getAllC,
    getCbyId,
    createAc,
    allact,
};