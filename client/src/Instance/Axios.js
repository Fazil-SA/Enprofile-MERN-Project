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

// import Axios from 'axios'

// export const axiosUserInstance = Axios.create({
//     baseURL: "http://localhost:5000"
// })

// export const axiosAdminInstance = Axios.create({
//     baseURL: "http://localhost:5000"
// })

// export const axiosUserCrudInstance = Axios.create({
//     baseURL: "http://localhost:5000"
// })

