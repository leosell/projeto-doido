import express from "express"
import { User } from "../../dataBase/models/User.js"

export const userUpdate = express.Router()

userUpdate.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, age, phone, sexo } = req.body

    const updateData = {}

    if (name) updateData.name = name
    if (age) updateData.age = age
    if (phone) updateData.phone = phone
    if (sexo) updateData.sexo = sexo

    try {
        await User.update(updateData, { where: { id } })
        res.send({ message: 'Usuário atualizado com sucesso' })
    } catch (err) {
        console.log(err)
    }
})