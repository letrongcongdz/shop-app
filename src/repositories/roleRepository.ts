import { AppDataSource } from "../config/databaseConnect.ts";
import { Role } from "../entities/Role.ts";
import type { IRoleRepository } from "./interfaces/roleRepository.ts";

export class RoleRepository implements IRoleRepository {
    private roleReopsitory = AppDataSource.getRepository(Role)
    findRoleById(id: number): Promise<Role | null> {
        return this.roleReopsitory.findOneBy({ id });
    }
}