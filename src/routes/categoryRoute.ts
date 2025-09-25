import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.ts";
import type { ICategoryService } from "../services/interfaces/categoryService.ts";
import { asyncHandler } from "../middlewares/wrapper.ts";

export const categoryRouter = (categoryService: ICategoryService) => {
  const router = Router();
  const controller = new CategoryController(categoryService);

  router.get("/", asyncHandler(controller.findAllCategories));
  router.get("/:id", asyncHandler(controller.findDetailCategory));
  router.post("/", asyncHandler(controller.createCategory));
  router.put("/:id", asyncHandler(controller.updateCategory));
  router.delete("/:id", asyncHandler(controller.deleteCategory));

  return router;
};
