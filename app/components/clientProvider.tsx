"use client";

import AnswerForm from "./answerForm";
import Header from "./header";
import { Country } from "@/utils/types";
import { useEffect, useState } from "react";
import CountryInformation from "./countryInformation";
import generateRandomCountry from "@/utils/generateRandomCountry";

export default function ClientProvider({ countries }: { countries: Country[] }) {
  const [streakCount, setStreakCount] = useState(0);
  const [alreadyGuessedCapitals, setAlreadyGuessedCapitals] = useState<string[]>([]);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    // This usEffect will prevent Hydration errors as the country depends on a random number and Server and Client won't match
    setCountry(generateRandomCountry(countries, alreadyGuessedCapitals));
  }, [countries, alreadyGuessedCapitals]);

  return (
    <>
      <Header streakCount={streakCount} />
      <CountryInformation country={country} />
      <AnswerForm
        countries={countries}
        answer={country?.capital[0] ?? null}
        setCountry={setCountry}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
        alreadyGuessedCapitals={alreadyGuessedCapitals}
        setAlreadyGuessedCapitals={setAlreadyGuessedCapitals}
      />
    </>
  );
}
