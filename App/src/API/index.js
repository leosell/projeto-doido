/* eslint-disable no-dupe-keys */
import axios from "axios"

const API = axios.create({
    baseURL: 'http://10.100.106.109:4000',
    baseURL: 'http://172.20.10.10:4000',
    baseURL: 'http://172.20.60.171:4000'
})

export default API