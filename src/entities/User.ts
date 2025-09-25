import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity.ts";

export class User extends BaseEntity {
    @PrimaryGeneratedColumn({name: "id"})
    private id: number;
    @Column({name: "full_name", nullable: false})
    private fullName: string;
    @Column({name: "phone_number", unique: true, nullable: false})
    private phoneNumber: string;
    @Column({name: "address", nullable: false})
    private address: string;
    @Column({name: "password", nullable: false})
    private password: string;
    @Column({name: "is_active"})
    private isActive: boolean;
    @ManyToOne(() => User, user => user.getRoleId(), {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({name: "role_id"})
    private roleId: number;
    
    constructor(
        id: number,
        fullName: string,
        phoneNumber: string,
        address: string,
        password: string,
        isActive: boolean,
        createAt: Date,
        updateAt: Date,
        roleId: number
    ) {
        super(createAt, updateAt);
        this.id = id;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.password = password;
        this.isActive = isActive;
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