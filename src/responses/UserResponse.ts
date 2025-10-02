export class UserResponse {
    public id: number;
    public fullName: string;
    public phoneNumber: string;
    public roleId: number;
    public address: string;

    constructor(
        id: number,
        fullName: string,
        phoneNumber: string,
        roleId: number,
        address: string
    ){
        this.id = id;
        this.fullName = fullName
        this.phoneNumber = phoneNumber;
        this.roleId = roleId;
        this.address = address;
    }
}