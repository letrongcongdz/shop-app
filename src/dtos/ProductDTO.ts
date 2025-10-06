export class ProductDTO{
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
        categoryId: number
    ) {
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        this.description = description;
        this.categoryId = categoryId;
    }
}