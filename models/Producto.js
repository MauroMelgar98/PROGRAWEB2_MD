//crear el modelo Producto
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define(
    "Producto",
    {
        id: {
            type: DataTypes.INTEGER, // INT 
            primaryKey: true, //LLAVE PRIMARIA
            autoIncrement: true // identity
        },
        nombre: {
            type: DataTypes.STRING(100), // NVARCHAR/VARCHAR(100)
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(255) // NVARCHAR/VARCHAR(255)
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),//DECIMAL
            allowNull: false 
        },
        stock: {
            type: DataTypes.INTEGER,//INT
            allowNull: false
        }
    },
    {
        tableName: "Productos"
    }
);
module.exports = Producto;