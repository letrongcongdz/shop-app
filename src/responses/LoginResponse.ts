import { UserResponse } from "./UserResponse.ts";

export class LoginResponse extends UserResponse {
    public token: string;

    constructor(
        token: string,
        id: number,
        fullName: string,
        phoneNumber: string,
        roleName: string,
        address: string
    ){
        super(id, fullName, phoneNumber, roleName, address);
        this.token = token;
    }
}
