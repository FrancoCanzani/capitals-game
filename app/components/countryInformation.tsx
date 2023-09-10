"use client";

import Image from "next/image";
import { Country } from "@/utils/types";
import CountryDifficultyIndicator from "./capitalDifficultyIndicator";

export default function CountryInformation({
  country,
  countries,
  alreadyGuessedCountries,
}: {
  country: Country | null;
  countries: Country[];
  alreadyGuessedCountries: Country[];
}) {
  if (!country) {
    // Handle the case when country is null or uninitialized
    return (
      <div className="flex flex-col py-8 md:py-6 items-center animate-fade animate-ease-in-out">
        <p>Loading country information...</p>
      </div>
    );
  }

  const currencies = Object.values(country.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(", ");
  const languages = Object.values(country.languages).join(", ");

  return (
    <div
      // Key so react knows the country changed and triggers a re render with the fade-in animation
      key={country.capital[0]}
      className="flex flex-col items-start w-full animate-fade animate-ease-in-out animate-duration-[400]"
    >
      <div className="flex my-4 items-center font-semibold text-sm justify-between w-full">
        <CountryDifficultyIndicator country={country} />
        <span>{`${alreadyGuessedCountries.length}/${countries.length}`}</span>
      </div>
      <div className="flex w-full shadow-2xl shadow-amber-50 flex-col lg:flex-row items-start justify-start space-y-3 lg:space-y-0 lg:space-x-6">
        <div className="h-52 w-full lg:w-1/2 relative">
          <Image
            src={country.flags.svg ?? country.flags.png}
            alt={`${country.flags.alt}`}
            priority
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md bg-cover"
          />
        </div>
        <div className="text-start capitalize h-52 w-full max-w-full lg:w-1/2 gap-2 text-sm">
          <div className="bg-slate-700 flex gap-1 max-w-full text-gray-100 mb-2 px-2 py-1 rounded-md">
            <span className="font-semibold min-w-max">Country:</span>
            <p className="truncate max-w-max">{country.name.common}</p>
          </div>
          <div className="bg-slate-100 px-2 py-1 max-w-full flex items-center gap-1 rounded-md mb-2">
            <span className="font-semibold min-w-max">Official Name:</span>
            <p className="truncate max-w-max">{country.name.official}</p>
          </div>
          <div className="bg-slate-100 px-2 py-1 flex max-w-full items-center gap-1 rounded-md mb-2">
            <span className="font-semibold min-w-max">Continent:</span>
            <p className="truncate max-w-max">{country.continents[0]}</p>
          </div>
          <div className="bg-slate-100 px-2 py-1 max-w-full flex items-center gap-1 rounded-md mb-2">
            <span className="font-semibold min-w-max">Currency:</span>
            <p className="truncate max-w-max">{currencies}</p>
          </div>
          <div className="bg-slate-100 px-2 py-1 max-w-full flex items-center gap-1 rounded-md mb-2">
            <span className="font-semibold min-w-max">Language:</span>
            <p className="truncate max-w-max">{languages}</p>
          </div>
          <div className="bg-slate-100 px-2 py-1 max-w-full flex items-center gap-1 rounded-md mb-2">
            <span className="font-semibold min-w-max">Population:</span>
            <p className="truncate">{country.population.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
