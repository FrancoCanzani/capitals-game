import { Country } from "./types";
import generateRandomNumber from "./generateRandomNumber";
import getCountryDifficulty from "./getCountryDifficulty";

export default function generateNextCountry(countries: Country[], guessedCountries: string[]): Country | null {
  const remainingCountries = countries.filter((country) => !guessedCountries.includes(country.capital[0]));

  const easyCountries = remainingCountries.filter((country) => getCountryDifficulty(country) === "Easy");
  const mediumCountries = remainingCountries.filter((country) => getCountryDifficulty(country) === "Medium");
  const hardCountries = remainingCountries.filter((country) => getCountryDifficulty(country) === "Hard");

  if (guessedCountries.length <= 45) {
    return easyCountries[generateRandomNumber(easyCountries.length)];
  } else if (guessedCountries.length > 45 && guessedCountries.length < 100) {
    return mediumCountries[generateRandomNumber(mediumCountries.length)];
  } else {
    return hardCountries[generateRandomNumber(hardCountries.length)];
  }
}
