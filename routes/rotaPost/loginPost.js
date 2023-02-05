import express from "express"
import { User } from "../../dataBase/models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const loginPost = express.Router()

loginPost.post('/login', async (req, res) => {

    const { user, password } = req.body

    try {
        const verifyUser = await User.findOne({ where: { user } }).catch(
            (err) => console.log(err)
        )
    
        if (!verifyUser) {
            return res
                .status(409)
                .json({ message: 'User/Password Invalid' })
        }
    
        if(!bcrypt.compareSync(password, verifyUser.password)) {
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
    
        res.json({ message: 'Bem vindo', token: token})
    } catch (err) {
        console.log(err)
        return res
            .status(500)
            .json({ message: 'Servidor fora de serviço' })
    }
})
