import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "roles"})
export class Role {
    @PrimaryGeneratedColumn({name: "id"})
    private id: number;
    @Column({name: "name", unique: true, nullable: false})
    private name: string;

    constructor(
        id: number,
        name: string
    ) {
        this.id = id;
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