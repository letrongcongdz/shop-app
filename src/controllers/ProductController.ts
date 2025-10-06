import type { Request, Response } from "express";
import { asyncHandler, sendResponse } from "../middlewares/wrapper.ts";
import { CategoryRepository } from "../repositories/categoryRepository.ts";
import { ProductRepository } from "../repositories/productRepository.ts";
import type { IProductService } from "../services/interfaces/productService.ts";
import { ProductService } from "../services/productService.ts";
import { FileService } from "../services/fileService.ts";


export class ProductController {
    private productService: IProductService;
    private productRepository = new ProductRepository();
    private categoryRepository = new CategoryRepository();


    constructor() {
        this.productService = new ProductService(
            this.productRepository,
            this.categoryRepository,
            new FileService()
        );
    }

    createProduct = asyncHandler(async (req: Request, res: Response) => {
        const productDTO = req.body;
        const file = req.file;
        const newProduct = await this.productService.createProduct(productDTO, file);
        return sendResponse(res, newProduct, "Create product success");
    })
}