import express from "express"
import { User } from "../../dataBase/models/User.js"

export const userPost = express.Router()

userPost.post('/cadastro', async (req, res) => {
    const { active, idEmpresa, name, user, password, typeUser, activeWaBox, phone } = req.body

    const existUser = await User.findOne({ where: { user } }).catch(
        (err) => {
            console.log(err)
        }
    )

    if (existUser) {
        return res
            .status(409)
            .json({ message: 'Nome de usuário já cadastrado no sistema' })
    }

    const newUser = new User({ active, idEmpresa, name, user, password, typeUser, activeWaBox, phone })
    const saveUser = await newUser.save().catch(
        (err) => {
            console.log(err)
            res
                .status(500)
                .json({ message: 'Não foi possível cadastrar um novo usuário' })
        }
    )

    if (saveUser) {
        return res
            .status(200)
            .json({ message: 'Obrigado por se cadastrar no sistema' })
    }
    
})
