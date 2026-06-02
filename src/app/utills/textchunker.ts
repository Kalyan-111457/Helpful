export class TextChunker {

    static async textchunk(
        text: string,
        chunksize = 1000,
        overlap = 200
    ): Promise<string[]> {

        if (text.length <= 0) {
            throw new Error("There is no text available");
        }

        const chunks: string[] = [];

        let start = 0;

        while (start < text.length) {

            const extractingpart = start + chunksize;

            chunks.push(
                text.slice(start, extractingpart)
            );

            start = start + chunksize - overlap;
        }

        return chunks;
    }
}