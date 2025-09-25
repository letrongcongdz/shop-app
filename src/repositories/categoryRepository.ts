import { AppDataSource } from "../config/databaseConnect.ts";
import { Category } from "../entities/Category.ts";
import type { ICategoryRepository } from "./interfaces/categoryRepository.ts";
import { DataSource, DeleteResult } from "typeorm";

export class CategoryRepository implements ICategoryRepository {
    private categoryRepository = appDataSource.getRepository(Category)
    async findAllCategories(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async findCategoryById(id: number): Promise<Category | null> {
        return await this.categoryRepository.findOneBy({ id });
    }

    async createCategory(category: Category): Promise<Category> {
        const newCategory = this.categoryRepository.create(category);
        return this.categoryRepository.save(newCategory);
    }

    async updateCategory(id: number, category: Category): Promise<Category | null> {
        await this.categoryRepository.update(id, category);
        return this.findCategoryById(id);
    }

    deleteCategory(id: number): Promise<DeleteResult> {
        return this.categoryRepository.delete(id);
    }
}