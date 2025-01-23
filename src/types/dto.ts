export interface CountryDTO {
  name: {
    common: string;
  };
  capital?: [string];
}

export interface WeatherDTO {
  weather: [
    {
      description: string;
    }
  ];
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  }
}
