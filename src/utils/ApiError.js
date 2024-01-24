class ApiError extends Error {
  constructor(
    message = "something went wrong",
    status,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.data = null;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
