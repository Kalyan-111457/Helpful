import { DocumentModel } from "../models/DocumentModel";
import { prisma } from "../utills/prisma";

export class DocumentRepository {
    async CreateandupdateDocument(document: DocumentModel, projectid: number) {

        const project = await prisma.project.findFirst({
            where: {
                id: projectid,
                isdeleted: false
            }
        });

        if (!project) {
            throw new Error("Project not found");
        }

        if (document.id) {

            const check = await prisma.document.findFirst({
                where: {
                    id: document.id,
                    isdeleted: false
                }
            });

            if (!check) {
                throw new Error("We are not find that Document");
            }

            const update = await prisma.document.update({
                where: {
                    id: document.id
                },
                data: {
                    fileName: document.fileName,
                    fileUrl: document.fileUrl,
                    fileType: document.fileType,
                    fileSize: Number(document.fileSize),
                    content: document.content,
                    summary: document.summary,
                    projectId: projectid
                }
            });

            return update;
        }

        else {

            const create = await prisma.document.create({
                data: {
                    fileName: document.fileName,
                    fileUrl: document.fileUrl,
                    fileType: document.fileType,
                    fileSize: Number(document.fileSize),
                    content: document.content,
                    summary: document.summary,
                    projectId: projectid,
                    isdeleted: false
                }
            });

            

            return create;
        }
    }

    async deletedocument(documentid: number) {

        const check = await prisma.document.findFirst({
            where: {
                id: documentid,
                isdeleted: false
            }
        });

        if (!check) {
            throw new Error("Document not found");
        }

        const deleting = await prisma.document.update({
            where: {
                id: documentid,
            },
            data: {
                isdeleted: true
            }
        });

        return deleting;
    }

    async getalldocumentsbasedonprojectid(projectid: number) {

        const check = await prisma.project.findFirst({
            where: {
                id: projectid,
                isdeleted: false
            }
        });

        if (!check) {
            throw new Error("we cannot find the project");
        }

        const getdocuments = await prisma.document.findMany({
            where: {
                projectId: projectid,
                isdeleted: false
            }
        });

        return getdocuments;
    }

    async getdocument(documentid: number) {

        const getdocument = await prisma.document.findFirst({
            where: {
                id: documentid,
                isdeleted: false
            }
        });

        if (!getdocument) {
            throw new Error("we are not find the any document");
        }

        return getdocument;
    }
}
