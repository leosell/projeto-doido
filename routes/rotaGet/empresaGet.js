import express from "express"
import { Empresa } from "../../dataBase/models/Empresa.js"

export const empresaGet = express.Router()

empresaGet.get('/', async (req, res) => {
    const page = req.query.page || 1
    const limit = 10
    const offSet = (page - 1) * limit
    const codNova = await Empresa.findAll({
        limit,
        offSet
    }).catch((err) => console.log(err))

    if (codNova) {
        return res
            .status(200)
            .json({ codNova })
    } else {
        return res.send({ message: 'Empresa não cadastada' })
    }
})