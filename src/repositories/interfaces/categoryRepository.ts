import type { DeleteResult } from "typeorm";
import type { Category } from "../../entities/Category.ts";

export interface ICategoryRepository {
    findAllCategories(): Promise<Category[]>;
    findCategoryById(id: number): Promise<Category | null>;
    createCategory(category: Category): Promise<Category>;
    updateCategory(id: number, category: Category): Promise<Category | null>;
    deleteCategory(id: number): Promise<DeleteResult>;
}