import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.ts";

@Entity({name: "roles"})
export class Role {
    @PrimaryGeneratedColumn({name: "id"})
    public id!: number;
    @Column({name: "name", type: "varchar", nullable: true})
    public name: string;
    @OneToMany(() => User, (user) => user.role)
    users!: User[];

    constructor(
        name: string
    ) {
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
}