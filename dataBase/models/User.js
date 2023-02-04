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

        active: {
            type: sequelize.BOOLEAN,
            allowNull: false
        },

        idEmpresa: {
            type: sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'empresas',
                key: 'id'
            }
        },

        name: {
            type: sequelize.STRING(150),
            allowNull: false,
        },

        user: {
            type: sequelize.STRING,
            allowNull: false,
        },

        password: {
            type: sequelize.STRING,
            allowNull: false
        },

        typeUser: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: [[
                    'Super',
                    'Regional',
                    'Comercial',
                    'Parceiro (Master)',
                    'Parceiro (Vendedor)',
                    'Parceiro (Operacional'
                ]]
            }
        },

        activeWaBox: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        phone: {
            type: sequelize.STRING(11),
            allowNull: true,
        }
    }
)

export { User }