import { ProjectRepository } from "../Repository/ProjectRepository";
import { ProjectModelCreate } from "../models/ProjectModel";

export class ProjectService {
    private repository: ProjectRepository;

    constructor() {
        this.repository = new ProjectRepository();
    }

    async CreateProjectservice(project: ProjectModelCreate) {
        if (!project.title) {
            throw new Error("Please Enter the title properly");
        }
        const data = await this.repository.CreateProject(project);

        return data;

    }


    async deleteprojectservice(id: number) {
        if (id <= 0) {
            throw new Error("the id must be less than Zero");
        }

        const data = await this.repository.deleteProject(id);
        return data;
    }

    async getAllProjectsBasedonUserid(id: number) {
        if (id <= 0) {
            throw new Error("the id must be less than zero ");
        }
        const data = await this.repository.getAllProjectsBasedOnUserId(id);
        return data;
    }


    async totalnoofprojects() {
        const data = await this.repository.gettotalnoofprojects();
        return data;

    }


    async getProject(id:number){
        if(id<=0){
            throw new Error("the id value must be less than zero");
        }
        const data=await this.repository.getProjectById(id);
        return data;
    }




}