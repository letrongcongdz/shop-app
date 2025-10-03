export class UserResponse {
    public id: number;
    public fullName: string;
    public phoneNumber: string;
    public roleName: string;
    public address: string;

    constructor(
        id: number,
        fullName: string,
        phoneNumber: string,
        roleName: string,
        address: string
    ){
        this.id = id;
        this.fullName = fullName
        this.phoneNumber = phoneNumber;
        this.roleName = roleName;
        this.address = address;
    }
}