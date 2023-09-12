"use client";

import AnswerForm from "./answerForm";
import Header from "./header";
import { Country } from "@/utils/types";
import { useEffect, useState } from "react";
import CountryInformation from "./countryInformation";
import generateNextCountry from "@/utils/generateNextCountry";
import AlreadyGuessedCountriesHistory from "./alreadyGuessedCountriesHistory";

export default function ClientProvider({ countries }: { countries: Country[] }) {
  const [streakCount, setStreakCount] = useState(0);
  const [alreadyGuessedCountries, setAlreadyGuessedCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    alreadyGuessedCountries.length === countries.length && setAlreadyGuessedCountries([]);
    // This usEffect will prevent Hydration errors as the country depends on a random number and Server and Client won't match
    setCountry(generateNextCountry(countries, alreadyGuessedCountries));
  }, [countries, alreadyGuessedCountries]);

  return (
    <main className="mx-3 w-full px-3 py-2 sm:w-3/4 md:w-2/3 lg:w-1/2 ">
      <Header streakCount={streakCount} />
      <CountryInformation country={country} countries={countries} alreadyGuessedCountries={alreadyGuessedCountries} />
      <AnswerForm
        countries={countries}
        country={country}
        answer={country?.capital[0] ?? null}
        setCountry={setCountry}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
        alreadyGuessedCountries={alreadyGuessedCountries}
        setAlreadyGuessedCountries={setAlreadyGuessedCountries}
      />
      <AlreadyGuessedCountriesHistory alreadyGuessedCountries={alreadyGuessedCountries} countries={countries} />
    </main>
  );
}
