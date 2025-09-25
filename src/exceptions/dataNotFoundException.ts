import { appError } from "./AppError.ts";

export class dataNotFoundException extends appError {
    constructor(message: string) {
        super(message, 404);
    }
}