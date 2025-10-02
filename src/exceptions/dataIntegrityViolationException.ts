import { appError } from "./appError.ts";

export class dataIntegrityViolationException extends appError {
    constructor(message: string) {
        super(message, 409);
    }
}