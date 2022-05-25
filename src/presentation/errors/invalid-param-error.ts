import { BaseErrorException } from "./base-error-exception";

export class InvalidParamError extends BaseErrorException {
    constructor(message: string) {
        super({
            code: "invalid_param",
            message: "Invalid param:" + message,
        });
        this.name = "MissingParamError";
    }
}
