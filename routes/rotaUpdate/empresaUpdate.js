import express from "express"
import { Empresa } from "../../dataBase/models/Empresa.js"

export const empresaUpdate = express.Router()

empresaUpdate.put('/:id', async (req, res) => {
    const { id } = req.params
    const { active, nameEmpresa, cnpj, codNova, regionalResponsavel, comercialResponsavel, email, phone, active3C, token3C } = req.body

    const updateData = {}

    if (active) updateData.active = active
    if (nameEmpresa) updateData.nameEmpresa = nameEmpresa
    if (cnpj) updateData.cnpj = cnpj
    if (codNova) updateData.codNova = codNova
    if (regionalResponsavel) updateData.regionalResponsavel = regionalResponsavel
    if (comercialResponsavel) updateData.comercialResponsavel = comercialResponsavel
    if (email) updateData.email = email
    if (phone) updateData.phone = phone
    if (active3C) updateData.active3C = active3C
    if (token3C) updateData.token3C = token3C

    try {
        await Empresa.update(updateData, { where: { id } })
        res.send({ message: 'Empresa atualizada com sucesso' })
    } catch (err) {
        console.log(err)
    }
})