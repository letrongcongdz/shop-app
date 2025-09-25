import { Router } from "express";
import { CategoryController } from "../controllers/categoryController.ts";
import type { ICategoryService } from "../services/interfaces/categoryService.ts";
import { asyncHandler } from "../middlewares/wrapper.ts";
import { validateBody } from "../middlewares/validator.ts";
import { createCategorySchema, updateCategorySchema } from "../validations/categoryValidation.ts";

export const categoryRouter = (categoryService: ICategoryService) => {
  const router = Router();
  const controller = new CategoryController(categoryService);

  router.get("/", asyncHandler(controller.findAllCategories));
  router.get("/:id", asyncHandler(controller.findDetailCategory));
  router.post("/", validateBody(createCategorySchema), controller.createCategory);
  router.put("/:id", validateBody(updateCategorySchema), controller.updateCategory);
  router.delete("/:id", asyncHandler(controller.deleteCategory));

  return router;
};
