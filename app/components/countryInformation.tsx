"use client";

import Image from "next/image";
import { Country } from "@/utils/types";
import CountryDifficultyIndicator from "./capitalDifficultyIndicator";
import CountryInformationSkeleton from "./skeletons/countryInformationSkeleton";

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
    return <CountryInformationSkeleton />;
  }

  const currencies = Object.values(country.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(", ");
  const languages = Object.values(country.languages).join(", ");

  return (
    <div
      // Key so react knows the country changed and triggers a re render with the fade-in animation
      key={country.capital[0]}
      className="animate-fade animate-ease-in-out animate-duration-[400] flex w-full flex-col items-start"
    >
      <div className="my-4 flex w-full items-center justify-between text-sm font-semibold dark:text-gray-200">
        <CountryDifficultyIndicator country={country} />
        <span>{`${alreadyGuessedCountries.length}/${countries.length}`}</span>
      </div>
      <div className="flex w-full flex-col items-start justify-start space-y-3 shadow-2xl shadow-amber-50 dark:shadow-none lg:flex-row lg:space-x-6 lg:space-y-0">
        <div className="relative h-52 w-full lg:w-1/2">
          <Image
            src={country.flags.svg ?? country.flags.png}
            alt={`${country.flags.alt}`}
            priority
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="h-52 w-full max-w-full gap-2 text-start text-sm capitalize lg:w-1/2">
          <div className="mb-2 flex max-w-full gap-1 rounded-md bg-slate-700 px-2 py-1 text-gray-100 dark:text-gray-200">
            <span className="min-w-max font-semibold">Country:</span>
            <p className="max-w-max truncate">{country.name.common}</p>
          </div>
          <div className="mb-2 flex max-w-full items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:text-black">
            <span className="min-w-max font-semibold">Official Name:</span>
            <p className="max-w-max truncate">{country.name.official}</p>
          </div>
          <div className="mb-2 flex max-w-full items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:text-black">
            <span className="min-w-max font-semibold">Continent:</span>
            <p className="max-w-max truncate">{country.continents[0]}</p>
          </div>
          <div className="mb-2 flex max-w-full items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:text-black">
            <span className="min-w-max font-semibold">Currency:</span>
            <p className="max-w-max truncate">{currencies}</p>
          </div>
          <div className="mb-2 flex max-w-full items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:text-black">
            <span className="min-w-max font-semibold">Language:</span>
            <p className="max-w-max truncate">{languages}</p>
          </div>
          <div className="mb-2 flex max-w-full items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:text-black">
            <span className="min-w-max font-semibold">Population:</span>
            <p className="truncate">{country.population.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
