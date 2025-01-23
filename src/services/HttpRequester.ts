import axios, { AxiosError, AxiosResponse } from "axios";

export class HttpRequester {
  static async get<T>(url: string, params?: object) {
    let httpResponse: AxiosResponse<T>;;

    try {
      httpResponse = await axios.get<T>(url, {
        params: params
      })

    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error("Error fetching data:", error.message);
        throw new HttpError(error);
      }
      throw error;
    }

    return httpResponse.data;
  }
}

export class HttpError extends Error {
  statusCode?: number;
  request?: string;
  response?: string;

  constructor({ message, status, request, response }: {
    message?: string;
    status?: number;
    request?: any;
    response?: any;
  }) {
    super(message);
    this.statusCode = status;
    this.request = request;
    this.response = response;
  }

}