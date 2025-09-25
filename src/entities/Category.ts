import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity({name: "categories"})
export class Category {
    @PrimaryGeneratedColumn({name: "id"})
    private id!: number;
    @Column({name: "name", unique: true, nullable: false})
    private name: string;

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
        this.name = name
    }
}