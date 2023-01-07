import axios from 'axios'

export const axiosUserInstance = axios.create({
    baseURL: "http://localhost:5000"
})

export const axiosAdminInstance = axios.create({
    baseURL: "http://localhost:5000"
})

export const axiosUserCrudInstance = axios.create({
    baseURL: "http://localhost:5000"
})
