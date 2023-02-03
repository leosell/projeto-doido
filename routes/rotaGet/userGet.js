import express from "express"
import { User } from "../../dataBase/models/User.js"

export const userGet = express.Router()

userGet.get('/cadastros', async (req, res) => {
    const user = await User.findAll().catch((err) => console.log(err))

    if (user && user.length > 0) {
        return res
            .status(200)
            .json(user)
    } else {
        return res.send({ message: 'não tem usuário cadastrado' })
    }
})