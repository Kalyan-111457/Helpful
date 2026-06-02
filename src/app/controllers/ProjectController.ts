import { Get, HttpCode, JsonController, Param, Post, QueryParam } from "routing-controllers"
import { ProjectService } from "../services/ProjectService"
import { Body } from "routing-controllers";
import { ProjectModelCreate } from "../models/ProjectModel";

@JsonController("/Projects")
export class ProjectController{

    private project:ProjectService;
    constructor(){
        this.project=new ProjectService();
    }

    @Post("/CreateProject")
    @HttpCode(200)
     async CreateProject(@Body() project:ProjectModelCreate ){
        return this.project.CreateProjectservice(project);
    }

    @Get("/GetProjectsBasedonUserid/id:number")
    @HttpCode(200)
    async GetProjectsByUserId(@Param("id") id:number){
        return this.project.getAllProjectsBasedonUserid(id);
    }


    @Post("/deleteproject")
    @HttpCode(200)
    async DeleteProject(@Param("id") id:number){
        return this.project.deleteprojectservice(id);

    }

    @Get("/totalProjects")
    @HttpCode(200)
    async TotalProjects(){
        return this.project.totalnoofprojects();
    }

    @Get("/getbasedonprojectid")
    @HttpCode(200)
    async GetBasedonProjectid(@QueryParam("id") id:number){
        return this.project.getProject(id);
    }

}