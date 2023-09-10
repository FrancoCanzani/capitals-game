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
      <div className="flex w-full shadow-2xl shadow-amber-50 flex-col sm:flex-row items-start justify-start space-y-3 sm:space-y-0 sm:space-x-6">
        <div className="h-52 w-full sm:w-1/2 relative">
          <Image
            src={country.flags.svg ?? country.flags.png}
            alt={`${country.flags.alt}`}
            priority
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md bg-cover"
          />
        </div>
        <div className="text-start h-52 w-full sm:w-1/2 gap-2 text-sm">
          <p className=" bg-slate-700 text-gray-100 mb-2 px-2 truncate py-1 rounded-md">
            <span className="font-semibold">Country:</span> {country.name.common}
          </p>
          <p className="px-2 py-1 rounded-md mb-2 truncate bg-slate-100">
            <span className="font-semibold">Official name:</span> {country.name.official}
          </p>
          <p className="bg-slate-100 mb-2 px-2 py-1 rounded-md">
            <span className="font-semibold">Continent:</span> {country.continents[0]}
          </p>
          <p className="px-2 py-1 capitalize truncate mb-2 bg-slate-100 rounded-md">
            <span className="font-semibold">Currency:</span> {currencies}
          </p>
          <p className="bg-slate-100 px-2 py-1 rounded-md mb-2 truncate">
            <span className="font-semibold">Language:</span> {languages}
          </p>
          <p className="bg-slate-100 rounded-md px-2 py-1">
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
