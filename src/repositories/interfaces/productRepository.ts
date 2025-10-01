import type { Product } from "../../entities/Product.ts";

export interface IProductRepository {
    findAllProducts(): Promise<Product[]>;
    findProductById(id: number): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(id: number, product: Product): Promise<Product>;
    deleteProduct(id: number): Promise<boolean>;
}