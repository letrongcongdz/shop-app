export class UserDTO {
    fullName: string;
    phoneNumber: string;
    address: string;
    password: string;
    retypePassword: string;
    roleId: number;

    constructor(
        fullName: string,
        phoneNumber: string,
        address: string,
        password: string,
        retypePassword: string,
        roleId: number
    ) {

        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.password = password;
        this.retypePassword = retypePassword;
        this.roleId = roleId;
    }
}
