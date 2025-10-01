import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.ts";
import { validateBody } from "../middlewares/validator.ts";
import { createCategorySchema, updateCategorySchema } from "../validations/categoryValidation.ts";

const router = Router();
const controller = new CategoryController();

router.get("/", controller.findAllCategories);
router.get("/:id", controller.findDetailCategory);
router.post("/", validateBody(createCategorySchema) ,controller.createCategory);
router.put("/:id", validateBody(updateCategorySchema),controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

export default router;
