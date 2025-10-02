import { appError } from "./appError.ts";

export class badRequestException extends appError {
    constructor(message: string) {
        super(message, 400);
    }
}
