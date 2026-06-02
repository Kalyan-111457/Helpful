import { UserModelCreate } from "../models/UserModel";
import { prisma } from "../utills/prisma";

export class UserRepository {
    async CreateandupdateUser(user: UserModelCreate) {

        if (user.id) {
            const check = await prisma.user.findFirst({
                where: {
                    id: user.id
                }
            })


            if (!check) {
                throw new Error("the user is not found");
            }
            const emailexist = await prisma.user.findFirst({
                where: {
                    email: user.email,
                    NOT: {
                        id: user.id,
                    },
                },
            });

            if (emailexist) {
                throw new Error("Email already exists");
            }

            const update = await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    fullName: user.fullName,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    address: user.address,
                    isdeleted: false,


                }
            })
            return update;
        }
        else {

            const emailexist = await prisma.user.findFirst({
                where: {
                    email: user.email
                }
            });

            if (emailexist) {
                throw new Error("Email already exists");
            }

            const CreateUser = await prisma.user.create({
                data: {
                    fullName: user.fullName,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    address: user.address,
                    isdeleted: false,
                }
            })

            return CreateUser;
        }
    }


    async GetAllUsers() {
        const users = await prisma.user.findMany({
            where: {
                isdeleted: false
            }
        })
        return users;
    }


    async deleteUserById(id: number) {
        const data = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("User not found");
        }
        const deleteuser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                isdeleted: true
            }
        })
        return deleteuser;
    }


}

