const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    id:{
      type :DataTypes.STRING(3),
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type:DataTypes.STRING,
      allowNull:false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type:DataTypes.STRING
    },
    population:{
      type:DataTypes.INTEGER 
    },
    area:{
      type:DataTypes.FLOAT 
    },

  });
};
      
