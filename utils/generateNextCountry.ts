import { Country } from "./types";
import generateRandomNumber from "./generateRandomNumber";
import getCountryDifficulty from "./getCountryDifficulty";

export default function generateNextCountry(countries: Country[], guessedCountries: Country[]): Country | null {
  const remainingCountries = countries.filter((country) => !guessedCountries.includes(country));

  const easyCountries = remainingCountries.filter((country) => getCountryDifficulty(country) === "Easy");
  const mediumCountries = remainingCountries.filter((country) => getCountryDifficulty(country) === "Medium");
  const hardCountries = remainingCountries.filter((country) => getCountryDifficulty(country) === "Hard");

  if (easyCountries.length > 0) {
    return easyCountries[generateRandomNumber(easyCountries.length)];
  } else if (mediumCountries.length > 0) {
    return mediumCountries[generateRandomNumber(mediumCountries.length)];
  } else if (hardCountries.length > 0) {
    return hardCountries[generateRandomNumber(hardCountries.length)];
  } else {
    return null; // No remaining countries
  }
}
