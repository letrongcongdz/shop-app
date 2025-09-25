import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
    @CreateDateColumn({ name: "created_at", type: "timestamp" })
    protected createAt: Date;
    @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
    protected updateAt: Date;

    constructor(
        createAt: Date,
        updateAt: Date
    ) {
        this.createAt = createAt;
        this.updateAt = updateAt;
    }

    public getCreateAt(): Date {
        return this.createAt;
    }
    public setCreateAt(createAt: Date) {
        this.createAt = createAt;
    }

    public getUpdateAt(): Date {
        return this.updateAt;
    }
    public setUpdateAt(updateAt: Date) {
        this.updateAt = updateAt;
    }
}