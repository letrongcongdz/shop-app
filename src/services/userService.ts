import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import type { UserDTO } from "../dtos/UserDTO.ts";
import { User } from "../entities/User.ts";
import { badRequestException } from "../exceptions/badRequestException.ts";
import { dataIntegrityViolationException } from "../exceptions/dataIntegrityViolationException.ts";
import type { IUserRepository } from "../repositories/interfaces/userRepository.ts";
import type { IUserService } from "./interfaces/userService.ts";
import type { UserLoginDTO } from "../dtos/UserLoginDTO.ts";
import { invalidParamException } from "../exceptions/invalidParamException.ts";
import { LoginResponse } from "../responses/LoginResponse.ts";
import type { IRoleRepository } from "../repositories/interfaces/roleRepository.ts";

export class UserService implements IUserService {
    private userRepository: IUserRepository;
    private roleRepository: IRoleRepository;
    constructor(
        userRepository: IUserRepository,
        roleRepository: IRoleRepository
    ) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async createUser(userDTO: UserDTO): Promise<User> {
        const existingPhoneNumber = await this.userRepository.findByPhoneNumber(userDTO.phoneNumber);
        if (existingPhoneNumber) {
            throw new dataIntegrityViolationException("Phone number already exists");
        }

        if (userDTO.password !== userDTO.retypePassword) {
            throw new badRequestException("Passwords do not match");
        }

        const hashPassword = await bcrypt.hash(userDTO.password, 10);

        const existingRole = await this.roleRepository.findRoleById(userDTO.roleId);
        if (!existingRole) {
            throw new badRequestException("Invalid roleId");
        }

        const now = new Date();
        const user = new User(
            userDTO.fullName,
            userDTO.phoneNumber,
            userDTO.address,
            hashPassword,
            now,
            now,
            existingRole
        )

        return await this.userRepository.createUser(user);
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