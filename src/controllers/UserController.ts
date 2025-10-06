import type { Request, Response } from "express";
import { asyncHandler, sendResponse } from "../middlewares/wrapper.ts";
import type { IUserService } from "../services/interfaces/userService.ts";
import { UserRepository } from "../repositories/userRepository.ts";
import { UserService } from "../services/userService.ts";
import { RoleRepository } from "../repositories/roleRepository.ts";

export class UserController {
    private userService: IUserService;
    private userRepository = new UserRepository();
    private roleRepository = new RoleRepository();
    
    constructor() {
        this.userService = new UserService(
            this.userRepository,
            this.roleRepository
        );
    }

    createUser = asyncHandler(async(req: Request, res: Response) => {
        const userDTO = req.body;
        const newUser = await this.userService.createUser(userDTO);
        return sendResponse(res, newUser, "Create user success");
    });

    login = asyncHandler(async(req: Request, res: Response) => {
        const userLoginDTO = req.body;
        const result = await this.userService.login(userLoginDTO);
        return sendResponse(res, result, "Login success");
    })
}