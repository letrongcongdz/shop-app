import { Router } from "express";
import { ProductController } from "../controllers/ProductController.ts";
import { validateBody } from "../middlewares/validateBody.ts";
import { createProductSchema } from "../validations/productValidation.ts";
import { upload } from "../utils/fileUpload.ts";

const router = Router();
const productController = new ProductController();

router.post(
    "/",
    upload.single("thumbnail"),
    validateBody(createProductSchema),
    productController.createProduct
)

export default router;