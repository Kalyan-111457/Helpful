import { OpenAI } from "openai";


const OpenAi=new OpenAI({
    apiKey:process.env.OPEN_API_KEY
})

export default OpenAi;