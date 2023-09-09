import { Country } from "./types";

enum CapitalDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export default function getCountryDifficulty(country: Country): CapitalDifficulty {
  const { population, continents, name } = country;

  // Check if the country is in Europe or North America
  if (continents.includes("Europe") || continents.includes("North America")) {
    if (population > 5000000) {
      return CapitalDifficulty.EASY;
    } else if (continents.includes("Europe") && population > 0) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  // Check if the country is in Asia
  if (continents.includes("Asia")) {
    if (population > 1000000000) {
      return CapitalDifficulty.EASY;
    } else if (population > 100000000) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  // Check if the country is in Oceania
  if (continents.includes("Oceania")) {
    if (name.common === "Australia" || name.common === "New Zealand") {
      return CapitalDifficulty.EASY;
    } else {
      return CapitalDifficulty.HARD;
    }
  }

  // Check if the country is in Africa
  if (continents.includes("Africa")) {
    if (population > 100000000) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  // Check if the country is in South America
  if (continents.includes("South America")) {
    if (population > 40000000) {
      return CapitalDifficulty.EASY;
    } else if (population > 3000000) {
      return CapitalDifficulty.MEDIUM;
    }
  }

  return CapitalDifficulty.HARD; // Default to hard if none of the above conditions are met
}
