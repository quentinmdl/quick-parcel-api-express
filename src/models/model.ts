// 'use strict';
// import { Model, Sequelize, DataTypes } from "sequelize";

// module.exports = (sequelize: Sequelize, DataTypes: DataTypes) => {
//   class tableName extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     // static associate(models) {
//     //   models.tableName.belongsTo(models.tableName, { 
//     //     onDelete: 'Cascade',
//     //     foreignKey: 'idTable'
//     //   });


//     // models.tableName.hasMany(models.tableName, {
//     //     onDelete: 'cascade',
//     //     foreignKey: 'idTable'
//     //   });
//     // });


//     // models.tableName.hasOne(models.tableName, {
//     //     foreignKey: 'idTable'
//     // });

//     // models.tableName.belongsToMany(models.tableName, {
//     //     through: models.tableName,
//     //     onDelete: "cascade",
//     //     as: "tableName",
//     //     foreignKey: "idTable",
//     //   });
//     // }
//   };
//   Table.init({
//     id: DataTypes.INTEGER,  
//   }, {
//     sequelize,
//     modelName: 'tableName',
//   });
//   return tableName;
// };
