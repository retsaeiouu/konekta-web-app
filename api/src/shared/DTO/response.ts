export class ResponseObject<T = unknown> {
  status: number;
  message: string;
  payload: T;

  constructor(status: number, message: string, payload: T) {
    this.status = status;
    this.message = message;
    this.payload = payload;
  }
}
