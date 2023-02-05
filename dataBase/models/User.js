import sequelize from "sequelize"
import connect from "../connect.js"
import bcrypt from "bcrypt"

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
    },

    {
        hooks: {
            beforeCreate: async (User) => {
                if (User.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a')
                    User.password = bcrypt.hashSync(User.password, salt)
                }
            },

            beforeUpdate: async (User) => {
                if (User.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a')
                    User.password = bcrypt.hashSync(User.password, salt)
                }
            }
        }
    }
)

export { User }