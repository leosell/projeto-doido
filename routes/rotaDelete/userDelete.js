import express from "express"
import { User } from "../../dataBase/models/User.js"

export const userDelete = express.Router()

userDelete.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        await User.destroy({ where: { id } })
        res.send({ message: 'Usuário deletado com sucesso' })
    } catch (err) {
        console.log(err)
        res.send({ message: 'Erro ao deletar usuário' })
    }
})