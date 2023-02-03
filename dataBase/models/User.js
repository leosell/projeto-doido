import sequelize from "sequelize"
import connect from "../connect.js"

const User = connect.define (
    'user',
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: sequelize.STRING(150),
            allowNull: false,
        },

        age: {
            type: sequelize.INTEGER,
            allowNull: false,
        },

        phone: {
            type: sequelize.STRING(11),
            allowNull: false,
        },

        sexo: {
            type: sequelize.STRING(1),
            allowNull: false,
        }
    }
)

export {User}