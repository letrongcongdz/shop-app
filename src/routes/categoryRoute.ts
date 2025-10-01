import { Router } from "express";
import { CategoryController } from "../controllers/categoryController.ts";
import type { ICategoryService } from "../services/interfaces/categoryService.ts";
import { asyncHandler } from "../middlewares/wrapper.ts";
//import { validateBody } from "../middlewares/validator.ts";
import { createCategorySchema, updateCategorySchema } from "../validations/categoryValidation.ts";

const router = Router();
const controller = new CategoryController();

router.get("/", controller.findAllCategories);
router.get("/:id", controller.findDetailCategory);
router.post("/", controller.createCategory);
router.put("/:id", controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

export default router;
