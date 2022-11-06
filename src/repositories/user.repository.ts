import prisma from "../../prisma/prisma.client";
import { IUserCreate } from "../interfaces/user.interface";

async function createUser(user: IUserCreate) {
    return await prisma.user.create({
        data: {
            ...user
        }
    });
}

async function deleteUser(id: number) {
    return await prisma.user.delete({
        where: {
            id: id
        }
    });
}

async function getUserByUsername(username: string) {
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

async function getUserInfoByUsername(username: string) {
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
async function getAllUserInfoByUsername(username: string) {
    return await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            name: true,
            surname: true,
            role: true,
            identificationType: true,
            identificationNumber: true,
            birthDate: true,
            nationality: true,
            address: true,
            city: true,
            level: true,
            bloodType: true,
            ethnicity: true,
            militarySituation: true,
            attendants: true
        }
    });
}

async function getAllUserInfoByDocument(identificationNumber: number) {
    return await prisma.user.findUnique({
        where: {
            identificationNumber: identificationNumber
        },
        select: {
            name: true,
            surname: true,
            role: true,
            identificationType: true,
            identificationNumber: true,
            birthDate: true,
            nationality: true,
            address: true,
            city: true,
            level: true,
            bloodType: true,
            ethnicity: true,
            militarySituation: true,
            attendants: true
        }
    });
}

async function updateUserAttendants(userID: number, attendantID: number) {
    return await prisma.user.update({
        where: {
            id: userID
        }, data: {
            attendants: {
                connect: {
                    id: attendantID,
                },
            },
        },
    });
}

export { createUser, deleteUser, getUserByUsername, getUserInfoByUsername, getAllUserInfoByUsername, updateUserAttendants, getAllUserInfoByDocument };
