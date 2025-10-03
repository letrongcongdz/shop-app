import { BaseDTO } from "./BaseDTO.ts";

export class ProductDTO extends BaseDTO{
    public name: string;
    public price: number;
    public thumbnail: string;
    public description: string;
    public categoryId: number;
    constructor(
        name: string,
        price: number,
        thumbnail: string,
        description: string,
        createAt: Date,
        updateAt: Date,
        categoryId: number
    ) {
        super(createAt, updateAt);
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        this.description = description;
        this.categoryId = categoryId;
    }
}