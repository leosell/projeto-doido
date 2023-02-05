import axios from "axios"

const API = axios.create({
    baseURL: 'https://192.168.1.14:5000'
})

export default API