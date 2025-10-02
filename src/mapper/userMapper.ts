import { User } from "../entities/User.ts";
import type { UserDTO } from "../dtos/UserDTO.ts";

export function mapUserDTOToUser(userDTO: UserDTO): User {
    const now = new Date();
    const user = new User(
        userDTO.fullName,
        userDTO.phoneNumber,
        userDTO.address, 
        userDTO.password,
        now,
        now,
        userDTO.roleId,
)
    return user;
}