import express from "express"
import { User } from "../../dataBase/models/User.js"

export const userGet = express.Router()

userGet.get('/', async (req, res) => {
    const page = req.query.page || 1
    const limit = 10
    const offSet = (page - 1) * limit
    const user = await User.findAll({
        limit,
        offSet
    }).catch((err) => console.log(err))

    if (user && user.length > 0) {
        return res
            .status(200)
            .json(user)
    } else {
        return res.send({ message: 'Não tem usuário cadastrado' })
    }
})