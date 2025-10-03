import { AppDataSource } from "../config/databaseConnect.ts";
import { User } from "../entities/User.ts";
import type { IUserRepository } from "./interfaces/userRepository.ts";

export class UserRepository implements IUserRepository {
    private userRepository = AppDataSource.getRepository(User)
    async createUser(user: User): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
        return await this.userRepository.findOne({
            where: { phoneNumber },
            relations: ['role'],
        });
    }
}