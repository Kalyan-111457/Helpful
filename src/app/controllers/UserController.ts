import {
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
} from "routing-controllers";
import { UserModelCreate } from "../models/UserModel";
import { UserService } from "../services/UserService";

@JsonController("/User")
export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @Post("/CreateUser")
  @HttpCode(200)
  async CreateUser(@Body() user: UserModelCreate) {
    return this.userService.CreateandupdateUser(user);
  }

  @Post("/deleteuser/:id")
  @HttpCode(200)
  async deleteUser(@Param("id") id: number) {
    return this.userService.deleteUserById(id);
  }

  @Get("/GetAllUsers")
  @HttpCode(200)
  async GetAllUsers() {
    return this.userService.GetAllUsers();
  }


}
