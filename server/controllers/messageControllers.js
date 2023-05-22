const {Message} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op } = require("sequelize");
const path = require('path')
const uuid = require('uuid')
// Створення
class MessageController{
    async create(req,res,next){
        try{
            const {text,creatorsUserId,getUserId} = req.body

            const message = await Message.create({text,creatorsUserId,getUserId})

            return res.json(message)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    // async getAll(req,res) {
    //     const {creatorsUserId,getUserId} = req.params
    //     let message
    //     message = await Message.findAll({
    //         where: {
    //             [Op.and]: [{[Op.or]:[{
    //                     getUserId:getUserId
    //                 },{
    //                     getUserId: creatorsUserId
    //                 }]},{[Op.or]:[{
    //                     creatorsUserId:creatorsUserId
    //                 },{
    //                     creatorsUserId: getUserId
    //                 }]}]
    //         }})
    //     return res.json(message)
    //
    // }
    async getAll(req,res) {
        const {userId} = req.params
        let message
        message = await Message.findAll({
            where: {
                        getUserId:userId
            }})
        return res.json(message)

    }
}
module.exports = new MessageController()