import { Dispatch, SetStateAction } from 'react';

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
  answer: string;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  setRevealAnswer: Dispatch<SetStateAction<boolean>>;
}

interface CheckButtonProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  answer: string;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
}

export type { Country, SkipButtonProps, CheckButtonProps };
