declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEATHER_FORECAST_SERVICE_URL: string;
      WEATHER_FORECAST_SERVICE_API_KEY: string;
    }
  }
}

export { };
