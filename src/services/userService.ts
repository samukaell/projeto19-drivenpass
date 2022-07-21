import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";
import * as userRepository from "../repositories/userRepository.js"

//Type da interface User, que vem do Prisma
export type CreateUserData = Omit<User, "id">;

export async function signUp(user: CreateUserData) {
    //verificar se o email ja foi cadastrado
    const emailUser = await finduser(user.email);
    if(emailUser){
        throw { type: "conflict", message: "user already registered" };
    }
    //Cadastrar
    return await createUser(user);
}
export async function signIn(login: CreateUserData) {
    //verificar se o email existe
    const user = await finduser(login.email);
    if(!user){
        throw { type: "not found", message: "never registered user" };
    }
    //Comparar as senhas
    if (user && bcrypt.compareSync(login.password, user.password)) {
        //OK, logando e retornando o token
        //gerando o token
        const token = jwt.sign({user:user},process.env.TOKENKEY);
        //Logando
        return token;        
    }
    else {
        throw { type: "conflict", message: "incompatible password" };
    }
}

//_________________________________________//
//Auxiliar 
async function finduser(email: string) {
    return await userRepository.findUserByEmail(email);
}
async function createUser(user: CreateUserData) {
    const SALT = 10;
	const passwordHash = bcrypt.hashSync(user.password, SALT);
    //Senha crip...
    await userRepository.createUser({
        email:user.email,
        password: passwordHash
    });

    return "Registered user"
}