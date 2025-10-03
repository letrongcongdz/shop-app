import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.ts";
import { UserController } from "../controllers/UserController.ts";
import { createUserSchema, loginSchema } from "../validations/userValidation.ts";

const router = Router();
const controller = new UserController();

// router.get("/", controller);
// router.get("/:id", controller);
router.post(
    "/", 
    validateBody(createUserSchema),
    controller.createUser
);
router.post(
    "/login", 
    controller.login
);
// router.put("/:id", validateBody(updateCategorySchema),controller);
// router.delete("/:id", controller.);

export default router;