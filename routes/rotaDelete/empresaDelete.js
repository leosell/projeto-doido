import express from "express"
import { Empresa } from "../../dataBase/models/Empresa.js"

export const empresaDelete = express.Router()

empresaDelete.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        await Empresa.destroy({ where: { id } })
        res.send({ message: 'Empresa deletada com sucesso' })
    } catch (err) {
        console.log(err)
        res.send({ message: 'Erro ao deletar empresa' })
    }
})