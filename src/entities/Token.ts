import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.ts";

export class Token {
    @PrimaryGeneratedColumn({ name: "id" })
    private id: number;
    @Column({ name: "token", nullable: false, unique: true })
    private token: string;
    @Column({ name: "token_type", nullable: false })
    private tokenType: string;
    @Column({ name: "expiration_date", type: "timestamp" })
    private expirationDate: Date;
    @Column({ name: "revoked", default: false })
    private revoked: boolean;
    @Column({ name: "expired", default: false })
    private expired: boolean;
    @ManyToOne(() => User, (user) => user.getId, {onDelete: "CASCADE"})
    @JoinColumn({ name: "user_id" })
    private userId: number;

    constructor(
        id: number,
        token: string,
        tokenType: string,
        expirationDate: Date,
        revoked: boolean,
        expired: boolean,
        userId: number
    ){
        this.id = id;
        this.token = token;
        this.tokenType = tokenType;
        this.expirationDate = expirationDate;
        this.revoked = revoked;
        this.expired = expired;
        this.userId = userId;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getToken(): string {
        return this.token;
    }
    public setToken(token: string) {
        this.token = token;
    }

    public getTokenType(): string {
        return this.tokenType;
    }
    public setTokenType(tokenType: string){
        this.tokenType = tokenType;
    }

    public getExpirationDate(): Date {
        return this.expirationDate;
    }
    public setExpirationDate(expirationDate: Date) {
        this.expirationDate = expirationDate;
    }

    public getRevoked(): boolean {
        return this.revoked;
    }
    public setRevoked(revoked: boolean) {
        this.revoked = revoked;
    }

    public getExpired(): boolean {
        return this.expired;
    }
    public setExpired(expired: boolean) {
        this.expired = expired;
    }

    public getUserId(): number {
        return this.userId;
    }
    public setuserId(userId: number) {
        this.userId = userId;
    }
}