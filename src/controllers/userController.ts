import { Request, Response } from "express";
import * as userService from "../services/userService.js"
import * as userRepositories from "../repositories/userRepository.js"

export async function singIn(req: Request, res: Response) {
    const login:userService.CreateUserData = req.body
    const token = await userService.signIn(login);
    res.status(200).send(token);
}

export async function singUp(req: Request, res: Response) {
    const user:userService.CreateUserData = req.body;
    await userService.signUp(user);
    res.sendStatus(200);
}