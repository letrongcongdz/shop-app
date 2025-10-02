import type { UserDTO } from "../../dtos/UserDTO.ts";
import type { UserLoginDTO } from "../../dtos/UserLoginDTO.ts";
import type { User } from "../../entities/User.ts";
import type { LoginResponse } from "../../responses/LoginResponse.ts";

export interface IUserService {
    createUser(userDTO: UserDTO): Promise<User>;
    login(userLoginDTO: UserLoginDTO): Promise<LoginResponse>;
}