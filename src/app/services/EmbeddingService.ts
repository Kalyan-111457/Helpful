import OpenAi from "../config/openapi";

export class EmbeddingService{
    static async OpenAiGpt(text:string){



        const response=await OpenAi.embeddings.create({
            model:"text-embedding-3-large",
            input:text
        })


        return response.data[0].embedding;
      
    }
}