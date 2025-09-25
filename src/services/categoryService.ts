import { tr } from "zod/locales";
import type { CategoryDTO } from "../dtos/CategoryDTO.ts";
import type { Category } from "../entities/Category.ts";
import { dataNotFoundException } from "../exceptions/dataNotFoundException.ts";
import type { ICategoryRepository } from "../repositories/interfaces/categoryRepository.ts";
import { CategoryResponse } from "../responses/CategoryResponse.ts";
import { paginateAndSearch, type PaginationOptions } from "../utils/algorithms.ts";
import type { ICategoryService } from "./interfaces/categoryService.ts";
import { mapCategoryDTOToEntity } from "../mapper/categoryMapper.ts";
import { databaseException } from "../exceptions/databaseException.ts";

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
    try {
      const categoryMapperEntity = mapCategoryDTOToEntity(categoryDTO);
      const newCategory = this.categoryRepository.createCategory(categoryMapperEntity);
      return newCategory;
    } catch (error) {
      throw new databaseException("Failed to create category")
    }
  }

  async updateCategory(id: number, categoryDTO: CategoryDTO): Promise<Category | null> {
    try {
      const existingId = await this.categoryRepository.findCategoryById(id);
      if (!existingId) {
        throw new dataNotFoundException(`Category with id = ${id} not found`);
      }
      const categoryMapperEntity = mapCategoryDTOToEntity(categoryDTO);
      const updateCategory = await this.categoryRepository.updateCategory(id, categoryMapperEntity)
      return updateCategory;
    } catch (error) {
      throw new databaseException("Failed to update category");
    }
  }

  async deleteCategory(id: number): Promise<void> {
    try {
      const existingCategory = await this.categoryRepository.findCategoryById(id);
      if (!existingCategory) {
        throw new dataNotFoundException(`Category with id = ${id} not found`);
      }

      await this.categoryRepository.deleteCategory(id);
    } catch (error) {
      throw new databaseException("Failed to delete category");
    }
  }
}