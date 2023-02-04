import express from "express"
import { userPost } from "./rotaPost/userPost.js"
import { userGet } from "./rotaGet/userGet.js"
import { userDelete } from "./rotaDelete/userDelete.js"
import { userUpdate } from "./rotaUpdate/userUpdate.js"
import { empresaPost } from "./rotaPost/empresaPost.js"

export const routes = express.Router()

routes.use('/user', userPost)
routes.use('/user/busca', userGet)
routes.use('/user/deletar', userDelete)
routes.use('/user/update', userUpdate)

routes.use('/empresa', empresaPost)