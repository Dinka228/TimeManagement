const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User}=require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt=(id,email)=>{
    return jwt.sign(
        {id,email},
        process.env.SECRET_KEY,
        {
            expiresIn: '24h'
        }

    )
}

class UserController{
    async registration(req,res,next){
        const {email,password} = req.body
        if(!email||!password){
            return next(ApiError.badRequest('Невірно вказана пошта або пароль'))
        }
        const candidate = await User.findOne({
            where:{email}
        })
        if(candidate){
            return next(ApiError.badRequest('Користувач з такою поштою вже є'))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,password:hashPassword})
        const token = generateJwt(user.id,user.email,user.role,user.name,user.telephone)
        return res.json({token})
    }
    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal('Користувача не існує'))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(ApiError.internal('Невірний пароль'))
        }
        const token = generateJwt(user.id,user.email)
        return res.json({token})
    }
    async check(req,res,next) {
        const token = generateJwt(req.user.id,req.user.email)
        return res.json({token})
    }
    async getAll(req,res,next) {
        let user
        user = await User.findAll()
        return res.json(user)
    }
}
module.exports = new UserController()