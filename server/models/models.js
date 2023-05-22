const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING}
})
const Message = sequelize.define('message',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    text:{type:DataTypes.STRING},
    creatorsUserId:{type:DataTypes.INTEGER},
    getUserId:{type:DataTypes.INTEGER}
})
const Task = sequelize.define('task',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    userId:{type:DataTypes.INTEGER},
    type:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    hours:{type:DataTypes.INTEGER},
    day:{type:DataTypes.INTEGER},
    minute:{type:DataTypes.INTEGER},
    months:{type:DataTypes.STRING}
})
module.exports={
    User,
    Task,
    Message
}