const sequelize = require('sequelize');
const { DataTypes, Sequelize } = require('sequelize');

module.exports =(sequelize)=>{
    sequelize.define('Activities',{
        id:{
           type:DataTypes.UUID,
           defaultValue: Sequelize.UUIDV4, 
           primaryKey: true,
           allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        dificulty:{
            type:DataTypes.STRING
        },
        duration:{
            type:DataTypes.STRING,
        },
        season:{
            type:DataTypes.ENUM,
            values:['Summer','Fall','Winter','Spring']
        }
    })

}