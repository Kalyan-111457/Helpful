import { DocumentService } from "../services/DocumentService";
import { DocumentModel, uploadDocumentModel } from "../models/DocumentModel";
import { HttpCode, JsonController, Post, Body, QueryParam, Get, Param } from "routing-controllers";


@JsonController("/Document")
export class DocumentController {
    private readonly service: DocumentService;

    constructor() {
        this.service = new DocumentService();
    }


    @Post("/Createandupload/:projectid")
    @HttpCode(200)
    public async Createandupload(  @Body() document: uploadDocumentModel,@Param("projectid") projectid: number ) {
        const data =await this.service.CreateAndUpdateDocumentService( document,projectid);

        return data;
    }


    @Post("/delete")
    @HttpCode(200)
    public async Deleted(@QueryParam("id") id: number) {
        const deleteing = await this.service.deletedocumentservice(id);
        return deleteing;
    }



    @Get("getdocument/:id")
    @HttpCode(200)
    public async GetDocument(@Param("id") id: number) {
        const documents = await this.service.getdocument(id);
        return documents;
    }


    @Get("/getdocumentbasedonprojectid/:id")
    @HttpCode(200)
    public async GetDocumentBasedonProjectid(@Param("id") id: number) {
        const documents = await this.service.getdocumentbasedonprojectid(id);
        return documents;
    }






}