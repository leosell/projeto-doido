import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const checkToken = (token, res) => {
    dotenv.config({ path: '../dataBase/config.env' })
    const chave = process.env.CHAVE_CRIPTOGRAFICA
    jwt.verify(
        token,
        chave,
        (err, data) => {
            if (err) {
                return res
                    .status(403)
                    .json({ message: 'Acesso Negado' })
            } else {
                return res.json({ data })
            }
        }
    )
}

export default checkToken