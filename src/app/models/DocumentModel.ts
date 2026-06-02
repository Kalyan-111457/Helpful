
export interface DocumentModel{
    id?:number,
    fileName:string,
    fileType:string,
    fileUrl:string,
    fileSize:number,
    content?:string,
    summary?:string,
    status?:string,
    projectId:number
    isdeleted:boolean
}

export interface uploadDocumentModel{
    filename:string,
    filetype:string,
    base64:string
}
