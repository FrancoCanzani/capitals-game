'use client';

import AnswerInput from './answerInput';
import Header from './header';
import { Country } from '@/utils/types';
import { useEffect, useState } from 'react';
import CountryInformation from './countryInformation';
import generateRandomNumber from '@/utils/generateRandomNumber';

export default function ClientProvider({
  countries,
}: {
  countries: Country[];
}) {
  const [streakCount, setStreakCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    // This usEffect will prevent Hydration errors as the country depends on a random number and Server and Client won't match
    setCountry(countries[randomNumber]);
  }, [randomNumber, countries]);

  return (
    <>
      <Header streakCount={streakCount} />
      <CountryInformation country={country} />
      <AnswerInput
        answer={country?.capital[0] ?? null}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
        setRandomNumber={setRandomNumber}
      />
    </>
  );
}
