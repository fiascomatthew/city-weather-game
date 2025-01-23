import axios, { AxiosError, AxiosResponse } from "axios";

export class HttpRequester {
  static async get<T>(url: string, params?: object) {
    let httpResponse: AxiosResponse<T>;;
    try {
      httpResponse = await axios.get<T>(url, {
        params: params
      })

      return httpResponse.data;

    } catch (error: unknown) {
      console.error("Error fetching data:", error);
    }
  }
}

