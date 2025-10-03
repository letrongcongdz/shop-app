export class BaseDTO {
    protected createAt: Date;
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