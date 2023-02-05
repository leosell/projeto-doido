import express from "express"
import { User } from "../../dataBase/models/User.js"
import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"

export const loginPost = express.Router()

loginPost.post('/login', async (req, res) => {
    const { user, password } = req.body

    const verifyUser = User.findOne({ where: { user } }).catch(
        (err) => console.log(err)
    )

    if (!verifyUser) {
        return res
            .status(409)
            .json({ message: 'User/Password Invalid' })
    }

    if(password === verifyUser.password) {
        return res
            .status(400)
            .json({ message: 'User/Password Invalid' })
    } else {
        var token = jwt.sign(
            {
                id: verifyUser.id,
                user: verifyUser.user,
                password: verifyUser.password
            },
    
            process.env.CHAVE_CRIPTOGRAFICA,
    
            {
                expiresIn: '1h'
            }
        )
    }

    res.status(200).json({ message: 'Bem vindo', token: token})
})
