import { ChunkRepository } from "../Repository/chunkRepository";
import { TextChunker } from "../utills/textchunker";
import { TextExtraction } from "../utills/TextExtraction";
import { EmbeddingService } from "./EmbeddingService";

export class ChunKService{

    private readonly repository:ChunkRepository;

    constructor(){
        this.repository=new ChunkRepository();
    }

    async chunkcreation(filename:string,buffer:Buffer,documentid:number){

        const extracttext=await TextExtraction.extracttext(filename,buffer);

        const chunks=await TextChunker.textchunk(extracttext);



        for(let i=0;i<chunks.length;i++){


         const embedding = await EmbeddingService.OpenAiGpt(chunks[i]);
         
            await this.repository.Createchunk({
                content:chunks[i],
                chunkIndex:i,
                documentId:documentid,
                embedding: embedding
            })
        }

        return chunks;

    }

}
