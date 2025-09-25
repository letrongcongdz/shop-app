import type { Category } from "../entities/Category.ts";

export class CategoryDTO {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
