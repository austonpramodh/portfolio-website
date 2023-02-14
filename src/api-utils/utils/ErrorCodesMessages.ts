const ErrorCodesMessages = {
  invalidRequestMethod: {
    code: 4001,
    message: "Oops, only Post request is allowed!",
    statusCode: 400,
  },
  unknownError: {
    code: 4002,
    message: "Unknown Error, Looks like you broke the server.",
    statusCode: 400,
    statusText: undefined,
  },
};

export default ErrorCodesMessages;
