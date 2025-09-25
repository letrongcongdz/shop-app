import type { Category } from "../entities/Category.ts";

export class CategoryResponse {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
