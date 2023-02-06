import jwt from "jsonwebtoken"

const checkToken = (token, res) => {
    jwt.verify(
        token,
        process.env.CHAVE_CRIPTOGRAFICA,
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