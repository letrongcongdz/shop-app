import type { User } from "../../entities/User.ts";

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    findByPhoneNumber(phoneNumber: string): Promise<User | null>; 
}