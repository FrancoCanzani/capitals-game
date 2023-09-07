'use client';

import { useState } from 'react';
import generateRandomNumber from '@/utils/generateRandomNumber';
import { Country } from '@/utils/types';

export function useNextCountry(
  countries: Country[],
  alreadyGuessedCapitals: string[]
) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const getNextCountry = () => {
    // Filter countries that haven't been guessed yet
    const unguessedCountries = countries.filter(
      (country) => !alreadyGuessedCapitals.includes(country.capital[0])
    );

    if (unguessedCountries.length === 0) {
      // All countries have been guessed, reset the guessed capitals list
      setAlreadyGuessedCapitals([]);
    } else {
      // Select a random unguessed country
      const randomIndex = generateRandomNumber(unguessedCountries.length);
      const nextCountry = unguessedCountries[randomIndex];

      // Set the selected country
      setSelectedCountry(nextCountry);
    }
  };

  return {
    selectedCountry,
    getNextCountry,
  };
}
