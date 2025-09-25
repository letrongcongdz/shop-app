import { Repository, ILike } from "typeorm";
import type { ObjectLiteral, FindOptionsWhere } from "typeorm";

export interface PaginationOptions {
    page: number;
    limit: number;
    keyword?: string | undefined;
}

export async function paginateAndSearch<T extends ObjectLiteral>(
    repository: Repository<T>,
    options: PaginationOptions,
    searchField?: keyof T
): Promise<{ items: T[]; total: number; page: number; limit: number }> {
    const { page, limit, keyword } = options;

    let where: FindOptionsWhere<T> | undefined;

    if (keyword && searchField) {
        where = {
            [searchField]: ILike(`%${keyword}%`)
        } as FindOptionsWhere<T>;
    }

    const queryOptions: any = {
        skip: (page - 1) * limit,
        take: limit,
        order: { id: "ASC" } as any
    };

    if (where) {
        queryOptions.where = where;
    }

    const [items, total] = await repository.findAndCount(queryOptions);

    return { items, total, page, limit };
}
