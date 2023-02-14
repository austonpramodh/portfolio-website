interface IErrorResponse {
  code: number;
  message: string;
  statusCode: number;
  statusText?: string;
}

class ErrorResponseModel {
  public statusCode: number;
  public message: string;
  public statusText: string | undefined;
  public code: number;
  public constructor(obj: IErrorResponse) {
    this.statusCode = obj.statusCode;
    this.code = obj.code;
    this.statusText = obj.statusText;
    this.message = obj.message;
  }
}

export default ErrorResponseModel;
