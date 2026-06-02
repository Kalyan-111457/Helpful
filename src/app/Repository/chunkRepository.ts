    import { chunkmodel } from "../models/chunkmodel";
    import { prisma } from "../utills/prisma";

    export class ChunkRepository{

        async Createchunk(chunk:chunkmodel){

            const result=await prisma.chunk.create({
                data:{
                    content:chunk.content,
                    documentId:chunk.documentId,
                    chunkIndex:chunk.chunkIndex,
                    embedding:chunk.embedding
                }
                
            });
            return result;

        }

        

    }
