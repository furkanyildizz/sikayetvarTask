import axios from "axios";

const getMockData=()=>{
    return axios.get(`https://jsonplaceholder.typicode.com/posts`)
}
const getMockDataById=(id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
const updateMockData=(id,data)=>{
    return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,data)
}
const deleteMockData=(id)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

const getUserById=(id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

}

let MockDataService={
    getMockData,
    updateMockData,
    deleteMockData,
    getMockDataById,
    getUserById
}

export {MockDataService}