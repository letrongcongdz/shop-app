import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity.ts";
import { Category } from "./Category.ts";

@Entity({name: "products"})
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn({name: "id"})
    public id!: number;
    @Column({name: "name", type: "varchar", nullable: false})
    public name: string;
    @Column({ name: "price", type: "decimal", precision: 10, scale: 2 })
    public price: number;
    @Column({name: "thumbnail", type: "varchar", nullable: false})
    public thumbnail: string;
    @Column({name: "description", type: "varchar"})
    public description: string;
    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: "category_id" })
    public category: Category;

    constructor(
        name: string,
        price: number,
        thumbnail: string,
        description: string,
        createAt: Date,
        updateAt: Date,
        category: Category
    ) {
        super(createAt, updateAt);
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        this.description = description;
        this.category = category;
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

    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number) {
        if(price < 0) throw new Error("Price must be greater than 0");
        this.price = price;
    }

    public getThumbnail(): string {
        return this.thumbnail;
    }
    public setThumbnail(thumbnail: string) {
        this.thumbnail = thumbnail;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(description: string) {
        this.description = description;
    }

    public getCategoryId(): Category {
        return this.category;
    }

    public setCategoryId(category: Category) {
        this.category = category;
    }
}