import connect from "./dataBase/connect.js"
import { User } from "./dataBase/models/User.js"
import { Empresa } from "./dataBase/models/Empresa.js"

const connectDataBase = async () => {
    try {
        const result = await connect.sync()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

connectDataBase()