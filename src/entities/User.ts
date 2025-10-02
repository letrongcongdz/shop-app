import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity.ts";

@Entity({name: "users"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "id" })
    public id!: number;
    @Column({ name: "fullname", type: "varchar", length: 100, default: "" })
    public fullName!: string;
    @Column({ name: "phone_number", type: "varchar", length: 10, unique: true })
    public phoneNumber!: string;
    @Column({ name: "address", type: "varchar", length: 200, default: "" })
    public address!: string;
    @Column({ name: "password", type: "varchar", length: 100, default: "" })
    public password!: string;
    @Column({ name: "is_active", type: "boolean", default: true })
    public isActive!: boolean;
    @Column({ name: "date_of_birth", type: "date", nullable: true })
    public dateOfBirth?: Date;
    @Column({ name: "facebook_account_id", type: "int", default: 0 })
    public facebookAccountId!: number;
    @Column({ name: "google_account_id", type: "int", default: 0 })
    public googleAccountId!: number;
    @ManyToOne(() => User, user => user.roleId, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({name: "role_id"})
    public roleId: number;

    constructor(
        fullName: string,
        phoneNumber: string,
        address: string,
        password: string,
        createAt: Date,
        updateAt: Date,
        roleId: number
    ) {
        super(createAt, updateAt);
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.password = password;
        this.roleId = roleId;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getFullName(): string {
        return this.fullName;
    }
    public setFullName(fullName: string) {
        this.fullName = fullName;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }
    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    public getAddress(): string {
        return this.address;
    }
    public setAddress(address: string) {
        this.address = address;
    }

    public getPassword(): string {
        return this.password;
    }
    public setPassword(password: string) {
        this.password = password;
    }

    public getIsActive(): boolean {
        return this.isActive;
    }
    public setIsActive(isAcctive: boolean) {
        this.isActive = isAcctive;
    }
    
    public getRoleId(): number {
        return this.roleId;
    }
    public setRoleId(roleId: number) {
        this.roleId = roleId;
    }
}