import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { Product } from "./Product.ts";

@Entity({name: "categories"})
export class Category {
    @PrimaryGeneratedColumn({name: "id"})
    id!: number;
    @Column({name: "name", type: "varchar", unique: true, nullable: false})
    name: string;
    @OneToMany(() => Product, (product) => product.category)
    public products!: Product[];

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