const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Category model
// class Category extends Model {}
//console.log(Category);
const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
category_name: {
  type: DataTypes.STRING,
  allowNull: false
}
});

// Category.init(
//   {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     }
//   },
//   {
//     category_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
//     },
// {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'category'
//   }
// );

module.exports = Category;