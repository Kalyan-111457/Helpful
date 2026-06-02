export interface UserModelCreate{
    id?:number | undefined;
    fullName:string | undefined;
    email:string | undefined;
    password:string | undefined;
    phone:string | undefined;
    address:string | undefined;
    isdeleted?:boolean;
}


