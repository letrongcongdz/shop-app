import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import type { UserDTO } from "../dtos/UserDTO.ts";
import type { User } from "../entities/User.ts";
import { badRequestException } from "../exceptions/badRequestException.ts";
import { dataIntegrityViolationException } from "../exceptions/dataIntegrityViolationException.ts";
import { dataNotFoundException } from "../exceptions/dataNotFoundException.ts";
import { mapUserDTOToUser } from "../mapper/userMapper.ts";
import type { IUserRepository } from "../repositories/interfaces/userRepository.ts";
import type { IUserService } from "./interfaces/userService.ts";
import { databaseException } from "../exceptions/databaseException.ts";
import type { UserLoginDTO } from "../dtos/UserLoginDTO.ts";
import { invalidParamException } from "../exceptions/invalidParamException.ts";
import { LoginResponse } from "../responses/LoginResponse.ts";

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

            if (userDTO.password !== userDTO.retypePassword) {
                throw new badRequestException("Passwords do not match");
            }

            const hashPassword = await bcrypt.hash(userDTO.password, 10);

            const userMapperEntity = mapUserDTOToUser(userDTO);
            userMapperEntity.setPassword(hashPassword);

            return await this.userRepository.createUser(userMapperEntity);

        } catch (error) {
            throw new databaseException("Failed to create user")
        }
    }

    async login(userLoginDTO: UserLoginDTO): Promise<LoginResponse> {
        const existingPhoneNumber = await this.userRepository.findByPhoneNumber(userLoginDTO.phoneNumber);
        if (!existingPhoneNumber) {
            throw new invalidParamException("Invalid phone number or password");
        }

        const isMatch = await bcrypt.compare(userLoginDTO.password, existingPhoneNumber.password);
        if (!isMatch) {
            throw new invalidParamException("Invalid phone number or password");
        }

        const token = jwt.sign(
            {
                id: existingPhoneNumber.id,
                phoneNumber: existingPhoneNumber.phoneNumber,
                fullName: existingPhoneNumber.fullName,
                role: existingPhoneNumber.role,
                address: existingPhoneNumber.address
            },
            process.env.JWT_SECRET || "fallbackSecret" as string,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1h" } as SignOptions
        );

        return new LoginResponse(
            token,
            existingPhoneNumber.id,
            existingPhoneNumber.fullName,
            existingPhoneNumber.phoneNumber,
            existingPhoneNumber.role.name,
            existingPhoneNumber.address
        );
    }


}