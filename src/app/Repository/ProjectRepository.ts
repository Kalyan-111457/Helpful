import { ProjectModelCreate } from "../models/ProjectModel";
import { prisma } from "../utills/prisma";

export class ProjectRepository {
    async CreateProject(project: ProjectModelCreate) {
        const createproject = await prisma.project.create({
            data: {
                title: project.title,
                description: project.description,
                thumbnail: project.thumbnail,
                userId: project.userId,
            }
        })

        return createproject;
    }


    async deleteProject(id: number) {
        const checkproject = await prisma.project.findFirst({
            where: {
                id: id,
                isdeleted: false
            }
        })

        if (!checkproject) {
            throw new Error("we cannot find that type of project");
        }

        const deleteproject = await prisma.project.update({
            where: {
                id: id
            },
            data: {
                isdeleted: true
            }
        })

        return deleteproject;
    }



    async getAllProjectsBasedOnUserId(id: number) {
        const checkuser = await prisma.user.findFirst({
            where: {
                id: id
            }
        })

        if (!checkuser) {
            throw new Error("we cannot find any user");
        }

        const projects = await prisma.project.findMany({
            where: {
                userId:id,
                isdeleted:false
            }
        })
        return projects;
    }


    async gettotalnoofprojects(){
        const projects=await prisma.project.findMany();

        if(projects.length==0){
            throw new Error("there is no projects has available here ")
        }

        return projects.length;

    }


    async getProjectById(id:number){
        const project=await prisma.project.findFirst({
            where:{
                id:id
            }
        })
        return project;
    }
}
