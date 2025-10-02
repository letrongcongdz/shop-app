import { UserResponse } from "./UserResponse.ts";

export class LoginResponse extends UserResponse {
    public token: string;

    constructor(
        token: string,
        id: number,
        fullName: string,
        phoneNumber: string,
        roleId: number,
        address: string
    ){
        super(id, fullName, phoneNumber, roleId, address);
        this.token = token;
    }
}
