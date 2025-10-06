import type { ProductDTO } from "../../dtos/ProductDTO.ts";
import type { Product } from "../../entities/Product.ts";

export interface IProductService {
    createProduct(productDTO: ProductDTO, file?: Express.Multer.File): Promise<Product>;
}