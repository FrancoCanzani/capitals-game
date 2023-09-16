import { Country } from "./types";

enum CapitalDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export default function getCountryDifficulty(country: Country): CapitalDifficulty {
  const { population, continents, name } = country;

  // Helper function to check if a country is in a specific continent
  const isInContinent = (continent: string) => continents.includes(continent);

  const easyCountries = ["Vatican City", "Monaco", "Cairo", "Tokyo", "Havana", "Jerusalem", "Seoul"];
  const mediumCountries = [
    "Bratislava",
    "Baku",
    "Bucharest",
    "Zagreb",
    "Minsk",
    "Belgrade",
    "Taipei",
    "Rabat",
    "Pretoria",
    "City Of San Marino",
    "Riyadh",
    "City Of Victoria",
    "Gibraltar",
    "Kathmandu",
    "Nairobi",
    "Tibilisi",
    "Pyongyang",
    "Hanoi",
    "Andorra La Vella",
    "Yaoundé",
    "Vaduz",
  ];
  const hardCountries = ["Port Moresby", "Dhaka", "Pristina", "Dili"];

  // Check for special cases
  if (easyCountries.includes(name.common)) {
    return CapitalDifficulty.EASY;
  } else if (mediumCountries.includes(name.common)) {
    return CapitalDifficulty.MEDIUM;
  } else if (hardCountries.includes(name.common)) {
    return CapitalDifficulty.HARD;
  }

  // Check by continent
  if (isInContinent("Europe")) {
    if (population > 4000000) {
      return CapitalDifficulty.EASY;
    } else if (population > 300000) {
      return CapitalDifficulty.MEDIUM;
    }
    return CapitalDifficulty.HARD;
  }

  if (isInContinent("North America")) {
    if (population > 20000000) {
      return CapitalDifficulty.EASY;
    } else if (population > 2000000) {
      return CapitalDifficulty.MEDIUM;
    }
    return CapitalDifficulty.HARD;
  }

  if (isInContinent("Asia")) {
    if (population > 1000000000) {
      return CapitalDifficulty.EASY;
    } else if (population > 100000000) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  if (isInContinent("Oceania")) {
    if (name.common === "Australia" || name.common === "New Zealand") {
      return CapitalDifficulty.EASY;
    }
    if (population > 1000000) {
      return CapitalDifficulty.MEDIUM;
    }
    return CapitalDifficulty.HARD;
  }

  if (isInContinent("Africa")) {
    if (population > 100000000) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  if (isInContinent("South America")) {
    if (population > 40000000) {
      return CapitalDifficulty.EASY;
    } else if (population > 3000000) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  return CapitalDifficulty.HARD; // Default to hard if none of the above conditions are met
}
