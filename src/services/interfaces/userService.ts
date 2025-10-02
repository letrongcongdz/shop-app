import type { UserDTO } from "../../dtos/UserDTO.ts";
import type { User } from "../../entities/User.ts";

export interface IUserService {
    createUser(userDTO: UserDTO): Promise<User>;
}