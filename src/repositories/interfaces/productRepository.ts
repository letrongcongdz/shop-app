import type { Product } from "../../entities/Product.ts";

export interface IProductRepository {
    findAllProducts(): Promise<Product[]>;
    findProductById(id: number): Promise<Product>;
    createProduct(product: Omit<Product, "id">): Promise<Product>;
    updateProduct(id: number, product: Partial<Product>): Promise<Product>;
    deleteProduct(id: number): Promise<boolean>;
}