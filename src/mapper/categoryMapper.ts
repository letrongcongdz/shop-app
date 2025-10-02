import type { CategoryDTO } from "../dtos/CategoryDTO.ts";
import { Category } from "../entities/Category.ts";

export function mapCategoryDTOToEntity(categoryDTO: CategoryDTO): Category {
    const category = new Category(categoryDTO.name);
    return category;
}