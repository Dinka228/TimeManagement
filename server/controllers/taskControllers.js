const {User} = require("../models/models");
const {Task} = require("../models/models");

class TaskController{
    async create(req,res){
        const {name,userId,type,hours,minute,day,months} = req.body
        const task = await Task.create({name,userId,type,hours,minute,day,months})
        return res.json(task)
    }
    async getAll(req,res){
        const {userId} = req.params
        const task = await Task.findAll({
            where:{userId}
        })
        return res.json(task)
    }
    // async getUserTask(req,res){
    //     const {userId} = req.params
    //     const task = await Task.findAll({
    //         where:{userId}
    //     })
    //     return res.json(task)
    // }

    // async update(req,res){
    //     const {taskId,userId,answer} = req.body
    //     await Task.update({curatorId:curatorId,answer:answer},{where:{id:taskId}})
    //     const updateCountTask = await User.findOne({where:{id:taskId}})
    //
    //     return res.json(updateCountTask)
    // }
}
module.exports = new TaskController()