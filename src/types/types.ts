export interface City {
  name: string;
  countryName: string;
}

export interface Weather {
  temperature: number;
  description: string;
  wind: number;
}

export enum Difficulty {
  HARD = "Difficile",
  EASY = "Facile"
};