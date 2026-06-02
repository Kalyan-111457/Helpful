import { BlobServiceClient } from "@azure/storage-blob";


const containerName = "documents";

export class AzureStorage {

    private static getBlobServiceClient() {
        const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

        if (!connectionString) {
            throw new Error("AZURE_STORAGE_CONNECTION_STRING is not configured");
        }

        try {
            return BlobServiceClient.fromConnectionString(connectionString);
        } catch {
            throw new Error("AZURE_STORAGE_CONNECTION_STRING is invalid");
        }
    }



    static async uploadbase64file(projectid: number, filename: string, base64: string) {

        const blobServiceClient = AzureStorage.getBlobServiceClient();

        const containerClient = blobServiceClient.getContainerClient(containerName);

        const uniqueFileName = `${projectid}/${Date.now()}-${filename}`;

        const blockBlobClient = containerClient.getBlockBlobClient(uniqueFileName);


        const base64Data =
            base64.split(";base64,").pop();

        if (!base64Data) {
            throw new Error("Invalid Base64");
        }

        const buffer =Buffer.from(base64Data, "base64");

        const fileSize = buffer.length;

        await blockBlobClient.uploadData(buffer);

        return {
            fileUrl: blockBlobClient.url,
            filename,
            fileSize,
            buffer
            
        };
    }




}



