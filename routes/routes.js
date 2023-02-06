import express from "express"
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

routes.use('/', loginPost)

routes.use('/user/cadastro', userPost)
routes.use('/user/busca', userGet)
routes.use('/user/deletar', userDelete)
routes.use('/user/update', userUpdate)

routes.use('/empresa/cadastro', empresaPost)
routes.use('/empresa/busca', empresaGet)
routes.use('/empresa/deletar', empresaDelete)
routes.use('/empresa/update', empresaUpdate)