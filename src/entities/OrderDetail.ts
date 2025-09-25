import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.ts";
import { Product } from "./Product.ts";

export class OrderDeatial {
    @PrimaryGeneratedColumn({ name: "id" })
    private id: number;
    @ManyToOne(() => Order, (order) => order.getId(), {onDelete: "CASCADE"})
    @JoinColumn({ name: "order_id" })
    private orderId: number;
    @ManyToOne(() => Product, (product) => product.getId(), {onDelete: "CASCADE"})
    @JoinColumn({ name: "product_id" })
    private productId: number;
    @Column({ name: "price", type: "decimal", precision: 10, scale: 2 })
    private price: number;
    @Column({ name: "number_of_product", type: "int" })
    private numberOfProduct: number;
    @Column({ name: "total_money", type: "decimal", precision: 10, scale: 2 })
    private totalMoney: number;
    @Column({ name: "color", nullable: true })
    private color: string;

    constructor(
        id: number,
        orderId: number,
        productId: number,
        price: number,
        numberOfProduct: number,
        totalMoney: number,
        color: string
    ){
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.price = price;
        this.numberOfProduct = numberOfProduct;
        this.totalMoney = totalMoney;
        this.color = color;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getOrderId(): number {
        return this.orderId;
    }
    public setOrderId(orderId: number) {
        this.orderId = orderId;
    }

    public getProductId(): number {
        return this.productId;
    }
    public setProductId(productId: number) {
        this.productId = productId;
    }

    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number) {
        this.price = price;
    }

    public getNumberOfProduct(): number{
        return this.numberOfProduct;
    }
    public setNumberOfProduct(numberOfProduct: number) {
        this.numberOfProduct = numberOfProduct;
    }

    public getTotalMoney(): number {
        return this.totalMoney;
    }
    public setTotalMoney(totalMoney: number) {
        this.totalMoney = totalMoney;
    }

    public getColor(): string {
        return this.color;
    }
    public setColor(color: string) {
        this.color = color;
    }
}
