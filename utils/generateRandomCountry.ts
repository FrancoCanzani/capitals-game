import { Country } from './types';
import generateRandomNumber from './generateRandomNumber';

export default function generateRandomCountry(
  countries: Country[],
  guessedCountries: string[]
): Country {
  const filteredCountries = countries.filter(
    (country: Country) => !guessedCountries.includes(country.capital[0])
  );

  const country =
    filteredCountries[
      generateRandomNumber(countries.length - guessedCountries.length)
    ];

  return country;
}
