import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createMessage = async(message)=>{
    const {data} = await $authHost.post('api/message',message)
    return data
}
export const fetchMessage = async()=>{
    const {data} = await $host.get('api/message')
    return data
}
export const fetchOneMessage = async(userId)=>{
    const {data} = await $authHost.get(`api/message/${userId}`)
    return data
}