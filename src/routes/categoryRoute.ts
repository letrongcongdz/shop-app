import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.ts";
import { validateBody } from "../middlewares/validator.ts";
import { createCategorySchema, updateCategorySchema } from "../validations/categoryValidation.ts";
import { authMiddleware, authorizeRoles } from "../middlewares/authMiddleware.ts";
import { Role } from "../enums/role.ts";

const router = Router();
const categoryController = new CategoryController();

router.get(
    "/", 
    categoryController.findAllCategories
);
router.get(
    "/:id", 
    categoryController.findDetailCategory
);
router.post(
    "/", 
    authMiddleware, authorizeRoles(Role.ADMIN),
    validateBody(createCategorySchema), 
    categoryController.createCategory
);
router.put(
    "/:id", 
    authMiddleware, 
    authorizeRoles(Role.ADMIN), 
    validateBody(updateCategorySchema),
    categoryController.updateCategory
);
router.delete(
    "/:id", 
    authMiddleware, 
    authorizeRoles(Role.ADMIN), 
    categoryController.deleteCategory
);

export default router;
