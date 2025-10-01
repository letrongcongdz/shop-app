import { appError } from "./appError.ts";

export class invalidParamException extends appError {
    constructor(message: string) {
        super(message, 400);
    }
}
