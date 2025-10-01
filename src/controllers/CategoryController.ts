import type { Request, Response } from "express";
import type { ICategoryService } from "../services/interfaces/categoryService.ts";
import { asyncHandler, sendResponse } from "../middlewares/wrapper.ts";
import type { PaginationOptions } from "../utils/algorithms.ts";
import { CategoryRepository } from "../repositories/categoryRepository.ts";
import { CategoryService } from "../services/categoryService.ts";
import { invalidParamException } from "../exceptions/invalidParamException.ts";

export class CategoryController {
  private categoryService: ICategoryService;
  private categoryRepository = new CategoryRepository();

  constructor() {
    this.categoryService = new CategoryService(this.categoryRepository);
  }

  findAllCategories = asyncHandler(async (req: Request, res: Response) => {
    const options: PaginationOptions = {
      page: parseInt(req.query.page as string) || 1,
      limit: parseInt(req.query.limit as string) || 1,
      keyword: req.query.keyword ? String(req.query.keyword) : undefined,
    };

    const categories = await this.categoryService.findAllCategories(options);
    return sendResponse(res, categories, "List categories");
  });

  findDetailCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new invalidParamException("Invalid category id");
    }

    const category = await this.categoryService.findCategoryById(id);
    return sendResponse(res, category, "Detail category");
  });

  createCategory = asyncHandler(async (req: Request, res: Response) => {
    const categoryDTO = req.body;
    const newCategory = await this.categoryService.createCategory(categoryDTO);
    return sendResponse(res, newCategory, "Create category success");
  });

  updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new invalidParamException("Invalid category id");
    }

    const categoryDTO = req.body;
    const updated = await this.categoryService.updateCategory(id, categoryDTO);
    return sendResponse(res, updated, "Update category success");
  });

  deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new invalidParamException("Invalid category id");
    }

    await this.categoryService.deleteCategory(id);
    return sendResponse(res, null, "Delete category success");
  });
}
