import type { CategoryDTO } from "../dtos/CategoryDTO.ts";
import { Category } from "../entities/Category.ts";
import { dataNotFoundException } from "../exceptions/dataNotFoundException.ts";
import type { ICategoryRepository } from "../repositories/interfaces/categoryRepository.ts";
import { CategoryResponse } from "../responses/CategoryResponse.ts";
import { paginateAndSearch, type PaginationOptions } from "../utils/algorithms.ts";
import type { ICategoryService } from "./interfaces/categoryService.ts";

export class CategoryService implements ICategoryService {
  private categoryRepository: ICategoryRepository;
  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async findAllCategories(options: PaginationOptions): Promise<CategoryResponse[]> {
    const repo: any = (this.categoryRepository as any).categoryRepository;
    const { items } = await paginateAndSearch<Category>(repo, options, "getName");
    return items.map((cat) => new CategoryResponse(cat.getId(), cat.getName()));
  }

  async findCategoryById(id: number): Promise<CategoryResponse> {
    const category = await this.categoryRepository.findCategoryById(id)
    if (!category) {
      throw new dataNotFoundException(`Category with id = ${id} not found`);
    }
    return new CategoryResponse(category.getId(), category.getName());
  }

  async createCategory(categoryDTO: CategoryDTO): Promise<Category> {
    const category = new Category(categoryDTO.name)
    const newCategory = await this.categoryRepository.createCategory(category);
    return newCategory;
  }

  async updateCategory(id: number, categoryDTO: CategoryDTO): Promise<Category | null> {
    const existingId = await this.categoryRepository.findCategoryById(id);
    if (!existingId) {
      throw new dataNotFoundException(`Category with id = ${id} not found`);
    }
    const category = new Category(categoryDTO.name);
    const updateCategory = await this.categoryRepository.updateCategory(id, category);
    return updateCategory;
  }

  async deleteCategory(id: number): Promise<void> {
    const existingCategory = await this.categoryRepository.findCategoryById(id);
    if (!existingCategory) {
      throw new dataNotFoundException(`Category with id = ${id} not found`);
    }
    await this.categoryRepository.deleteCategory(id);
  }
}