import type { ProductDTO } from "../dtos/ProductDTO.ts";
import { Product } from "../entities/Product.ts";
import { badRequestException } from "../exceptions/badRequestException.ts";
import type { ICategoryRepository } from "../repositories/interfaces/categoryRepository.ts";
import type { IProductRepository } from "../repositories/interfaces/productRepository.ts";
import type { FileService } from "./fileService.ts";
import type { IProductService } from "./interfaces/productService.ts";

export class ProductService implements IProductService {
    private productRepository: IProductRepository;
    private categoryRepository: ICategoryRepository;
    private fileService: FileService;


    constructor(
        productRepository: IProductRepository,
        categoryRepository: ICategoryRepository,
        fileService: FileService
    ){
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.fileService = fileService
    }

    async createProduct(productDTO: ProductDTO, file?: Express.Multer.File): Promise<Product> {
        const now = new Date();
        const thumbnail = this.fileService.saveFile(file);

        const existingCategory = await this.categoryRepository.findCategoryById(productDTO.categoryId);
        if(!existingCategory) {
            throw new badRequestException("Invalid categoryId");
        }
        const product = new Product(
            productDTO.name,
            productDTO.price,
            thumbnail,
            productDTO.description,
            now,
            now,
            existingCategory
        );
        const newProduct = this.productRepository.createProduct(product);
        return newProduct;
    }
}