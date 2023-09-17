"use client";

import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import LetterHider from "./letterHider";
import CheckAnswerButton from "./buttons/checkAnswerButton";
import SkipAnswerButton from "./buttons/skipAnswerButton";
import { Country } from "@/utils/types";

export default function AnswerForm({
  answer,
  streakCount,
  setStreakCount,
  countries,
  alreadyGuessedCountries,
  setAlreadyGuessedCountries,
  country,
  setCountry,
}: {
  answer: string | null;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  alreadyGuessedCountries: Country[];
  setAlreadyGuessedCountries: Dispatch<SetStateAction<Country[]>>;
  countries: Country[];
  country: Country | null;
  setCountry: Dispatch<SetStateAction<Country | null>>;
}) {
  const [userInput, setUserInput] = useState<string>("");
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [shake, setShake] = useState(false); // State variable for shaking effect

  return (
    <form className="xs:pb-8 flex w-full flex-col justify-between gap-1 pb-6 pt-4">
      <LetterHider answer={answer} userInput={userInput} revealAnswer={revealAnswer} />
      <label htmlFor="guess" className="mb-1 hidden text-xs font-semibold">
        Your Answer
      </label>
      <input
        type="text"
        name="guess"
        spellCheck="false"
        autoFocus
        id="guess"
        className={`my-2 rounded-md border-2 p-2 dark:bg-gray-100 dark:text-black ${
          shake ? "border-red-500" : "border-gray-100"
        }`}
        placeholder="Answer"
        value={userInput}
        autoComplete="off"
        onChange={(e) => setUserInput(e.target.value)}
      />

      <div className="flex items-center space-x-1">
        <SkipAnswerButton
          userInput={userInput}
          setUserInput={setUserInput}
          answer={answer}
          setStreakCount={setStreakCount}
          streakCount={streakCount}
          setRevealAnswer={setRevealAnswer}
          countries={countries}
          country={country}
          setCountry={setCountry}
          alreadyGuessedCountries={alreadyGuessedCountries}
          setAlreadyGuessedCountries={setAlreadyGuessedCountries}
        />
        <CheckAnswerButton
          userInput={userInput}
          setUserInput={setUserInput}
          answer={answer}
          setStreakCount={setStreakCount}
          streakCount={streakCount}
          shake={shake}
          setShake={setShake}
          country={country}
          setAlreadyGuessedCountries={setAlreadyGuessedCountries}
        />
      </div>
    </form>
  );
}
