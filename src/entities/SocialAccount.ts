import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.ts";

export class SocialAccount {
    @PrimaryGeneratedColumn({ name: "id" })
    private id: number;
    @Column({ name: "provider", nullable: false })
    private provider: string;
    @Column({ name: "provider_id", nullable: false })
    private providerId: string;
    @Column({ name: "email", nullable: true })
    private email: string;
    @Column({ name: "name", nullable: true })
    private name: string;
    @ManyToOne(() => User, (user) => user.getId, {onDelete: "CASCADE"})
    @JoinColumn({ name: "user_id" })
    private userId: number;

    constructor(
        id: number,
        provider: string,
        providerId: string,
        email: string,
        name: string,
        userId: number
    ){
        this.id = id;
        this.provider = provider;
        this.providerId = providerId;
        this.email = email;
        this.name = name;
        this.userId = userId;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }
    
    public getProvider(): string {
        return this.provider
    }
    public setProvider(provider: string) {
        this.provider = provider;
    }

    public getProviderId(): string {
        return this.providerId;
    }
    public setProviderId(providerId: string) {
        this.providerId = providerId;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string) {
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }

    public getUserId(): number {
        return this.userId
    }
    public setUserId(userId: number) {
        this.userId = userId;
    }
}