import type { Role } from "../../entities/Role.ts";

export interface IRoleRepository {
    findRoleById(id: number): Promise<Role | null>;
}