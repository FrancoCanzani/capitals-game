import { Country } from "@/utils/types";
import CountryDifficultyIndicator from "./capitalDifficultyIndicator";
import { History } from "lucide-react";

export default function AlreadyGuessedCountriesHistory({
  alreadyGuessedCountries,
  countries,
}: {
  alreadyGuessedCountries: Country[];
  countries: Country[];
}) {
  return (
    <section className="w-full">
      <h2 className="z-50 flex w-full items-center gap-1 border-b font-semibold dark:text-gray-200">
        <History size={18} />
        History
      </h2>
      <ol className="w-full">
        {alreadyGuessedCountries.slice(0, 5).map((country: Country, index) => (
          <li
            className={`${index == 0 && "animate-fade-down animate-duration-500 animate-ease-in-out"} ${
              index == alreadyGuessedCountries.length - 1 && "mb-6 border-b"
            }  flex flex-col items-start justify-between border-b py-2 text-sm`}
            key={country.name.common}
          >
            <div className="flex w-full items-center justify-between font-semibold dark:text-gray-200">
              <CountryDifficultyIndicator country={country} />
              <span>{`${alreadyGuessedCountries.length - index}/${countries.length}`}</span>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Country:</span> {country.name.common}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Capital:</span> {country.capital[0]}
              </p>{" "}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
