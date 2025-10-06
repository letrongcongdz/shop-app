import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.ts";
import { UserController } from "../controllers/UserController.ts";
import { createUserSchema, loginSchema } from "../validations/userValidation.ts";

const router = Router();
const userController = new UserController();

// router.get("/", controller);
// router.get("/:id", controller);
router.post(
    "/", 
    validateBody(createUserSchema),
    userController.createUser
);
router.post(
    "/login", 
    userController.login
);
// router.put("/:id", validateBody(updateCategorySchema),controller);
// router.delete("/:id", controller.);

export default router;