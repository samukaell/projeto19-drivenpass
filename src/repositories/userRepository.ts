import {prisma}  from "../config/db.js"
import { CreateUserData } from "../services/userService.js";

async function findUserByEmail(email: string) {
    return await prisma.user.findFirst({
        where: {
            email:{
                equals:email
            }
        },
    });
}
async function findUserById(id: number) {
    return await prisma.user.findFirst({
        where: {
            id:{
                equals:id
            }
        },
    });
}
async function createUser(user:CreateUserData) {
    await prisma.user.create({
        data:user,
    })
}

export {
    findUserByEmail,
    findUserById,
    createUser
};