import express from "express"
import jwt from "jsonwebtoken"
import { userPost } from "./rotaPost/userPost.js"
import { userGet } from "./rotaGet/userGet.js"
import { userDelete } from "./rotaDelete/userDelete.js"
import { userUpdate } from "./rotaUpdate/userUpdate.js"
import { empresaPost } from "./rotaPost/empresaPost.js"
import { empresaGet } from "./rotaGet/empresaGet.js"
import { empresaDelete } from "./rotaDelete/empresaDelete.js"
import { empresaUpdate } from "./rotaUpdate/empresaUpdate.js"
import { loginPost } from "./rotaPost/loginPost.js"

export const routes = express.Router()

const checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.CHAVE_CRIPTOGRAFICA)
        req.userData = decoded
        next()
    } catch (err) {
        console.log(err)
        return res
            .status(401)
            .json({ message: 'Usuário sem token valido' })
    }
}

routes.use('/', loginPost)

routes.use('/user/cadastro', checkToken, userPost)
routes.use('/user/busca', checkToken, userGet)
routes.use('/user/deletar', checkToken, userDelete)
routes.use('/user/update', checkToken, userUpdate)

routes.use('/empresa/cadastro', checkToken, empresaPost)
routes.use('/empresa/busca', checkToken, empresaGet)
routes.use('/empresa/deletar', checkToken, empresaDelete)
routes.use('/empresa/update', checkToken, empresaUpdate)