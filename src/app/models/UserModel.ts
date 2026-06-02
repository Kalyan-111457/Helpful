export interface UserModelCreate{
    id?:number;
    fullName:string;
    email:string;
    password:string;
    phone:string;
    address:string;
    isdeleted?:boolean;
}


