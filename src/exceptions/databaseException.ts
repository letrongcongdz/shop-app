import { appError } from "./appError.ts";

export class databaseException extends appError {
    constructor(message: string) {
        super(message, 500);
    }
}