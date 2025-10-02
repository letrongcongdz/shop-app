import bcrypt from "bcryptjs";
import type { UserDTO } from "../dtos/UserDTO.ts";
import type { User } from "../entities/User.ts";
import { badRequestException } from "../exceptions/badRequestException.ts";
import { dataIntegrityViolationException } from "../exceptions/dataIntegrityViolationException.ts";
import { dataNotFoundException } from "../exceptions/dataNotFoundException.ts";
import { mapUserDTOToUser } from "../mapper/userMapper.ts";
import type { IUserRepository } from "../repositories/interfaces/userRepository.ts";
import type { IUserService } from "./interfaces/userService.ts";
import { databaseException } from "../exceptions/databaseException.ts";

export class UserService implements IUserService {
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }
    async createUser(userDTO: UserDTO): Promise<User> {
        try {
            const existingPhoneNumber = await this.userRepository.findByPhoneNumber(userDTO.phoneNumber);
            if (existingPhoneNumber) {
                throw new dataIntegrityViolationException("Phone number already exists");
            }

            // if (userDTO.password !== userDTO.retypePassword) {
            //     throw new badRequestException("Passwords do not match");
            // }

            const hashPassword = await bcrypt.hash(userDTO.password, 10);

            const userMapperEntity = mapUserDTOToUser(userDTO);
            userMapperEntity.setPassword(hashPassword);

            return await this.userRepository.createUser(userMapperEntity);

        } catch (error) {
            throw new databaseException("Failed to create user")
        }
    }

}