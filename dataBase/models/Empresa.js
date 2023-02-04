import sequelize from "sequelize";
import connect from "../connect.js";

export const Empresa = connect.define(
    'empresa',
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

        nameEmpresa: {
            type: sequelize.STRING(150),
            allowNull: false
        },

        cnpj: {
            type: sequelize.STRING(14),
            allowNull: false,
            unique: true,
        },

        codNova: {
            type: sequelize.INTEGER,
            allowNull: false,
            unique: true
        },

        regionalResponsavel: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: [[
                    'Jhonatan Regional',
                    'Juliana Regional',
                    'Cassio Regional',
                    'Mauricio Regional',
                    'Bruno Regional'
                ]]
            }
        },

        comercialResponsavel: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: [[
                    'Andrezza Maria Villaca Martins',
                    'Ariane Jandira Assuncao',
                    'Bianca Larice Cesar dos Santos',
                    'Bruno Santos Nascimento',
                    'Daniela Souza Vieira',
                    'Danielle Siqueira Couto',
                    'Douglas Gladyson Silva Oliveira',
                    'Eduardo Vieira da Silva',
                    'Fernanda Soares Otani',
                    'Geanderson Locks Nazario de Oliveira',
                    'Gisele Ramos',
                    'Joyce Ferreira Chaves',
                    'Julia de Carvalho Oliveira',
                    'Luciane Nadir Aguiar',
                    'Luciano Soares',
                    'Marcelo Henrique Barbosa Cordeiro',
                    'Marcus Vinicius de Oliveira Marques',
                    'Maria Ieda Samico Cavalcanti',
                    'Neimar Santos',
                    'Rodrigo Valci Silveira',
                    'Rodrigo Vicente Monteiro',
                    'Sillas de Santana dos Santos',
                    'Sinesio da Silva',
                    'Thayse do Livramento Pereira'
                ]]
            }
        },

        email: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: true
        },

        phone: {
            type: sequelize.STRING(11),
            allowNull: false
        },

        active3C: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        token3C: {
            type: sequelize.STRING,
            allowNull: true
        }
    }
)