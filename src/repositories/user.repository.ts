import prisma from "../../prisma/prisma.client";
import { IUserCreate } from "../interfaces/user.interface";

async function createUser(user: IUserCreate){
    return await prisma.user.create({
        data: {
            ...user
        }
    });    
}

async function deleteUser(id: number){
    return await prisma.user.delete({
        where: {
            id: id
        }
    });
}

async function getUserByUsername(username: string){
    return await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            id: true,
            username: true,
            password: true,
            role: true
        }
    });

}

async function getUserInfoByUsername(username: string){
    return await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            id: true,
            username: true,
            name: true,
            surname: true,
            identificationType: true,
            identificationNumber: true,
            role: true
        }
    });
}

export { createUser, deleteUser, getUserByUsername, getUserInfoByUsername };
