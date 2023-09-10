import { Dispatch, SetStateAction } from "react";

type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      sin: string[];
      tam: string[];
    };
  };
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  continents: string[];
  population: number;
};

interface SkipButtonProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  answer: string | null;
  streakCount: number;
  countries: Country[];
  alreadyGuessedCountries: Country[];
  setCountry: Dispatch<SetStateAction<Country | null>>;
  country: Country | null;
  setAlreadyGuessedCountries: Dispatch<SetStateAction<Country[]>>;
  setStreakCount: Dispatch<SetStateAction<number>>;
  setRevealAnswer: Dispatch<SetStateAction<boolean>>;
}

interface CheckButtonProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  answer: string | null;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  shake: boolean;
  country: Country | null;
  setShake: Dispatch<SetStateAction<boolean>>;
  setAlreadyGuessedCountries: Dispatch<SetStateAction<Country[]>>;
}

export type { Country, SkipButtonProps, CheckButtonProps };
