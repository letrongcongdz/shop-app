import { appError } from "./appError.ts";

export class badRequestError extends appError {
    constructor(message: string) {
        super(message, 400);
    }
}