import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.ts";
import { validateBody } from "../middlewares/validateBody.ts";
import { createCategorySchema, updateCategorySchema } from "../validations/categoryValidation.ts";

const router = Router();
const categoryController = new CategoryController();

router.get("/", categoryController.findAllCategories);
router.get("/:id", categoryController.findDetailCategory);
router.post("/", validateBody(createCategorySchema) ,categoryController.createCategory);
router.put("/:id", validateBody(updateCategorySchema),categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

export default router;
