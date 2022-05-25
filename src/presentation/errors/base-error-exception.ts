type BaseErrorExceptionProps = {
    message: string;
    code: string;
};

export abstract class BaseErrorException extends Error {
    protected constructor(error: BaseErrorExceptionProps) {
        super(error ? JSON.stringify(error) : "Internal server error");
    }
}
