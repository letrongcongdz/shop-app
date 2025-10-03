import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "../enums/OrderStatus.ts";
import { User } from "./User.ts";

@Entity({name: "orders"})
export class Order {
    @PrimaryGeneratedColumn({name: "id"})
    private id: number;
    @OneToMany(() => User, user => user.getId(), {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({name: "user_id"})
    private userId: number;
    @Column({name: "full_name", nullable: false})
    private fullName: string;
    @Column({name: "email", nullable: false, unique: true})
    private email: string;
    @Column({name: "phone_number", nullable: false, unique: true})
    private phoneNumber: string;
    @Column({name: "address", nullable: false})
    private address: string;
    @Column({name: "note"})
    private note: string;
    @Column({name: "orrder_date"})
    private orderDate: Date;
    @Column({type: "enum",enum: OrderStatus,default: OrderStatus.Pending})
    private status: OrderStatus;
    @Column({ name: "total_money", type: "decimal", precision: 10, scale: 2 })
    private totalMoney: number;
    @Column({ name: "shipping_method", nullable: true })
    private shippingMethod: string;
    @Column({ name: "shipping_address", nullable: true })
    private shippingAddress: string;
    @Column({ name: "shipping_date", type: "timestamp", nullable: true })
    private shippingDate: Date;
    @Column({ name: "tracking_number", nullable: true })
    private strackingNumber: string;
    @Column({ name: "payment_method", nullable: true })
    private paymentMethod: string;
    @Column({ name: "is_active", default: true })
    private isActive: boolean;

    constructor(
        id: number,
        userId: number,
        fullName: string,
        email: string,
        phoneNumber: string,
        address: string,
        note: string,
        orderDate: Date,
        status: OrderStatus,
        totalMoney: number,
        shippingMethod: string,
        shippingAddress: string,
        shippingDate: Date,
        strackingNumber: string,
        paymentMethod: string,
        isActive: boolean
    ) {
        this.id = id;
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.note = note;
        this.orderDate = orderDate;
        this.status = status;
        this.totalMoney = totalMoney;
        this.shippingMethod = shippingMethod;
        this.shippingAddress = shippingAddress;
        this.shippingDate = shippingDate;
        this.strackingNumber = strackingNumber;
        this.paymentMethod = paymentMethod;
        this.isActive = isActive;
    }

    // Getters
    public getId(): number { 
        return this.id; 
    }
    public setId(id: number): void { 
        this.id = id; 
    }

    public getUserId(): number { 
        return this.userId; 
    }
    public setUserId(userId: number): void { 
        this.userId = userId; 
    }

    public getFullName(): string { 
        return this.fullName; 
    }
    public setFullName(fullName: string): void { 
        this.fullName = fullName; 
    }

    public getEmail(): string { 
        return this.email; 
    }
    public setEmail(email: string): void { 
        this.email = email; 
    }
    
    public getPhoneNumber(): string { 
        return this.phoneNumber; 
    }
    public setPhoneNumber(phoneNumber: string): void { 
        this.phoneNumber = phoneNumber; 
    }

    public getAddress(): string { 
        return this.address;
    }
    public setAddress(address: string): void { 
        this.address = address; 
    }

    public getNote(): string { 
        return this.note; 
    }
    public setNote(note: string): void { 
        this.note = note; 
    }

    public getOrderDate(): Date { 
        return this.orderDate;
    }
    public setOrderDate(orderDate: Date): void { 
        this.orderDate = orderDate; 
    }

    public getStatus(): OrderStatus { 
        return this.status;
    }
    public setStatus(status: OrderStatus): void { 
        this.status = status; 
    }

    public getTotalMoney(): number { 
        return this.totalMoney; 
    }
    public setTotalMoney(totalMoney: number): void { 
        this.totalMoney = totalMoney;
    }

    public getShippingMethod(): string { 
        return this.shippingMethod; 
    }
    public setShippingMethod(shippingMethod: string): void { 
        this.shippingMethod = shippingMethod; 
    }

    public getShippingAddress(): string { 
        return this.shippingAddress;
    }
    public setShippingAddress(shippingAddress: string): void { 
        this.shippingAddress = shippingAddress; 
    }

    public getShippingDate(): Date { return this.shippingDate; }
    public setShippingDate(shippingDate: Date): void { 
        this.shippingDate = shippingDate; 
    }

    public getStrackingNumber(): string { 
        return this.strackingNumber; 
    }
    public setStrackingNumber(strackingNumber: string): void { 
        this.strackingNumber = strackingNumber; 
    }

    public getPaymentMethod(): string { 
        return this.paymentMethod; 
    }
    public setPaymentMethod(paymentMethod: string): void { 
        this.paymentMethod = paymentMethod; 
    }

    public getIsActive(): boolean { 
        return this.isActive; 
    }
    public setIsActive(isActive: boolean): void { 
        this.isActive = isActive;
    }    
}
