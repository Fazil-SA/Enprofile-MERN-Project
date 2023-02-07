import Axios from 'axios'

export const axiosUserInstance = Axios.create({
    baseURL: "/"
})

export const axiosAdminInstance = Axios.create({
    baseURL: "/"
})

export const axiosUserCrudInstance = Axios.create({
    baseURL: "/"
})


