import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createTask = async(task)=>{
    const {data} = await $authHost.post('api/task',task)
    return data
}
export const fetchTask = async()=>{
    const {data} = await $host.get('api/task')
    return data
}
export const fetchOneTask = async(id)=>{
    const {data} = await $authHost.get(`api/task/${id}`)
    return data
}
export const fetchOneUserTask = async(id)=>{
    const {data} = await $authHost.get(`api/task/${id}`)
    return data
}
export const updateTask = async(updateData)=>{
    const {data} = await $authHost.post(`api/task/update`,updateData)
    return data
}