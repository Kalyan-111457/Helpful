import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";

export class TextExtraction {

    static async extracttext(filename: string,buffer: Buffer ) {

        const normalisedfilename =filename.toLowerCase();

        if (normalisedfilename.endsWith(".pdf")) {

            const parser =new PDFParse({ data: buffer });

            const result =await parser.getText();

            return result.text;
        }

        if ( normalisedfilename.endsWith(".docx") ||normalisedfilename.endsWith(".word")) {

            const data =
                await mammoth.extractRawText({
                    buffer
                });

            return data.value;
        }

        if ( normalisedfilename.endsWith(".txt")) {

            return buffer.toString("utf-8");
        }

        throw new Error(
            "Unsupported file format"
        );
    }
}