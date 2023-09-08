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
  answer: string | null;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  setRevealAnswer: Dispatch<SetStateAction<boolean>>;
  setRandomNumber: Dispatch<SetStateAction<number>>;
}

interface CheckButtonProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  answer: string | null;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  shake: boolean;
  setShake: Dispatch<SetStateAction<boolean>>;
}

export type { Country, SkipButtonProps, CheckButtonProps };
