import { DocumentModel, uploadDocumentModel } from "../models/DocumentModel";
import { DocumentRepository } from "../Repository/DocumentRepository";
import { AzureStorage } from "../utills/AzureStorage";
import { ChunKService } from "./ChunkService";

export class DocumentService {
    private readonly repository: DocumentRepository;
    private readonly ChunkService:ChunKService;
   
    constructor() {
        this.repository = new DocumentRepository();
        this.ChunkService=new ChunKService();
     
    }

    async CreateAndUpdateDocumentService(
        document: uploadDocumentModel,
        projectid: number
    ) {

        if (
            !document.filename ||
            !document.filetype ||
            !document.base64
        ) {
            throw new Error("Invalid upload data");
        }

        if (projectid <= 0) {
            throw new Error(
                "Project id should not be less than zero"
            );
        }

        const uploaded =
            await AzureStorage.uploadbase64file(
                projectid,
                document.filename,
                document.base64
            );


        const documentData: DocumentModel = {

            fileName: document.filename,

            fileType: document.filetype,

            fileUrl: uploaded.fileUrl,

            fileSize: uploaded.fileSize,

            projectId: projectid,

            isdeleted: false


        };

        const create =
            await this.repository
                .CreateandupdateDocument(
                    documentData,
                    projectid
                );


        await this.ChunkService.chunkcreation( document.filename, uploaded.buffer, create.id);

        return create;
    }


    async deletedocumentservice(documentid: number) {
        if (documentid <= 0) {
            throw new Error("the documentid is not be less than Zero");
        }

        const deleting = await this.repository.deletedocument(documentid);

        return deleting;

    }


    async getdocument(documentid: number) {
        if (documentid <= 0) {
            throw new Error("the document id is not be less than Zero");
        }

        const data = await this.repository.getdocument(documentid);
        return data;
    }


    async getdocumentbasedonprojectid(projectid: number) {
        if (projectid <= 0) {
            throw new Error("the project id is not be less than Zero");
        }
        const data = await this.repository.getalldocumentsbasedonprojectid(projectid);

        return data;
    }



}