import type { CategoryDTO } from "../../dtos/CategoryDTO.ts";
import type { Category } from "../../entities/Category.ts";
import type { CategoryResponse } from "../../responses/CategoryResponse.ts";
import type { PaginationOptions } from "../../utils/algorithms.ts";

export interface ICategoryService {
    findAllCategories(options: PaginationOptions): Promise<CategoryResponse[]>;
    findCategoryById(id: number): Promise<CategoryResponse>;
    createCategory(categoryDTO: CategoryDTO): Promise<Category>;
    updateCategory(id: number, categoryDTO: CategoryDTO): Promise<Category | null>;
    deleteCategory(id: number): Promise<void>;
}