import express from "express"
import { Empresa } from "../../dataBase/models/Empresa.js"

export const empresaPost = express.Router()

empresaPost.post('/cadastro', async (req, res) => {
    const { active, nameEmpresa, cnpj, codNova, regionalResponsavel, comercialResponsavel, email, phone, active3C, token3C } = req.body

    const existEmpresa = await Empresa.findOne({ where: { codNova } }).catch(
        (err) => console.log(err)
    )

    if (existEmpresa) return res.status(409).json({ message: 'Empresa já criada no sistema' })

    const newEmpresa = new Empresa({ active, nameEmpresa, cnpj, codNova, regionalResponsavel, comercialResponsavel, email, phone, active3C, token3C })
    const saveEmpresa = await newEmpresa.save().catch(
        (err) => {
            console.log(err)
            return res
                .status(500)
                .json({ message: 'Não foi possível criar a empresa' })
        }
    )

    if (saveEmpresa) return res.status(200).json({ message: 'Obrigado por se cadastrar no sistema' })
})