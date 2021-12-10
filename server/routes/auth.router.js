import { Router } from "express";
import authController from "../controllers/authController.js";
import roleMdw from "../middlewares/role.mdw.js";
import config from "../../config/config.js"


const authRouter = new Router()


authRouter.post('/registration', authController.registration)
authRouter.post('/signIn', authController.signIn)

authRouter.get('/signIn', (req, res) => {
    res.sendFile(`${config.clientPath}auth.html`)
})
authRouter.get('/users', roleMdw(["ADMIN"]), authController.getUsers)


export default authRouter