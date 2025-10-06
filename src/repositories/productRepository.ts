import { AppDataSource } from "../config/databaseConnect.ts";
import { Product } from "../entities/Product.ts";
import type { IProductRepository } from "./interfaces/productRepository.ts";

export class ProductRepository implements IProductRepository {
    private productRepository = AppDataSource.getRepository(Product)
    async createProduct(product: Product): Promise<Product> {
        const newProduct = this.productRepository.create(product);
        return await this.productRepository.save(newProduct);
    }
}