import { UserModelCreate } from "../models/UserModel";
import { UserRepository } from "../Repository/UserRepository";

export class UserService{
    private userreposiory:UserRepository;

    constructor(){
        this.userreposiory=new UserRepository();
    }

    async CreateandupdateUser(user:UserModelCreate){
        if(user.fullName.length<3){
            throw new Error("Full name must be at least 3 characters long");
        }
        if(!user.email.includes("@")){
            throw new Error("Invalid email format");
        }
        if(user.password.length<6){
            throw new Error("Password must be at least 6 characters long");
        }
        if(user.phone.length<10){
            throw new Error("Phone number must be at least 10 characters long");
        }
        if(!user.address || user.address.length<5 ||!user.email || !user.phone || !user.password || !user.fullName){
            throw new Error("All fields are required and must meet the specified criteria");
        }
        const CreateUser=await this.userreposiory.CreateandupdateUser(user);
        return CreateUser;
    }


    async GetAllUsers(){
        const users=await this.userreposiory.GetAllUsers();
        return users;
    }

    async deleteUserById(id:number){
        if(id<=0){
            throw new Error("Invalid user ID");
        }
        const deleteuser=await this.userreposiory.deleteUserById(id);
        return deleteuser;
    }

    
}