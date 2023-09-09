"use client";

import Image from "next/image";
import { Country } from "@/utils/types";
import getCountryDifficulty from "@/utils/getCountryDifficulty";

export default function CountryInformation({ country }: { country: Country | null }) {
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
      className="flex flex-col py-2 items-center animate-fade animate-ease-in-out animate-duration-250"
    >
      <div className="my-4 rounded-md bg-white w-40">
        <span
          className={`
        ${
          getCountryDifficulty(country) === "Easy"
            ? "bg-green-500 w-1/3"
            : getCountryDifficulty(country) === "Medium"
            ? "bg-yellow-500 w-2/3"
            : "bg-red-500 w-full"
        }
        flex font-semibold py-0.5 text-sm shadow-sm items-center rounded-md justify-center`}
        >
          {getCountryDifficulty(country)}
        </span>
      </div>
      <div className="h-44 w-72 relative shadow-2xl shadow-amber-50">
        <Image
          src={country.flags.svg ?? country.flags.png}
          alt={`${country.flags.alt}`}
          priority
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md bg-cover"
        />
      </div>
      <div className="mt-12 md:mt-10 mb-5">
        <p className="text-center font-semibold text-xl">{country.name.common}</p>
        <p className="text-center font-semibold text-xs text-gray-700">{country.name.official}</p>
      </div>
      <div className="text-center text-xs text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">Continent:</span> {country.continents[0]}
        </p>
        <p className="capitalize">
          <span className="font-semibold">Currency:</span> {currencies}
        </p>
        <p>
          <span className="font-semibold">Language:</span> {languages}
        </p>
        <p>
          <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
