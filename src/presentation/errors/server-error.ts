import { BaseErrorException } from "./base-error-exception";

export class ServerError extends BaseErrorException {
    constructor() {
        super({
            code: "server_error",
            message: "Internal server error",
        });
        this.name = "InternalServerError";
    }
}
