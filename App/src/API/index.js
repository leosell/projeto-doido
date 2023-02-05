import axios from "axios"

const API = axios.create({
    baseURL: 'http://192.168.1.14:4000'
})

export default API