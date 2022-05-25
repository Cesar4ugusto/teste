import { BaseErrorException } from "./base-error-exception";

export class MissingParamError extends BaseErrorException {
    constructor(message: string) {
        super({
            code: "missing_param",
            message: "Missing param:" + message,
        });
        this.name = "MissingParamError";
    }
}
