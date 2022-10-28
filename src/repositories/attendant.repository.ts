import prisma from "../../prisma/prisma.client";
import { IAttendantCreate } from "../interfaces/attendant.interface";

async function createAttendant(attendant: IAttendantCreate) {
    return await prisma.attendant.create({
        data: {
            ...attendant
        }
    });
}

async function deleteAttendant(id: number) {
    return await prisma.attendant.delete({
        where: {
            id: id
        }
    });
}

export { createAttendant, deleteAttendant }