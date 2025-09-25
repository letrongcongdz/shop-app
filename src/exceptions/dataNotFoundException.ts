import { appError } from "./appError.ts";

export class dataNotFoundException extends appError {
    constructor(message: string) {
        super(message, 404);
    }
}