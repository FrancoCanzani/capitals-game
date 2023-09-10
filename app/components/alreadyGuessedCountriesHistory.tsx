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
      <h2 className="font-semibold w-full border-b flex items-center gap-1">
        <History size={18} />
        History
      </h2>
      <ol className="w-full">
        {alreadyGuessedCountries.slice(0, 5).map((country: Country, index) => (
          <li
            className={`${index == 0 && "animate-fade-down animate-duration-500 animate-ease-in-out"} ${
              index == alreadyGuessedCountries.length - 1 && "border-b"
            }  py-2 flex flex-col items-start text-sm justify-between border-b`}
            key={country.name.common}
          >
            <div className="flex w-full mb-2 font-semibold items-center justify-between">
              <CountryDifficultyIndicator country={country} />
              <span>{`${alreadyGuessedCountries.length - index}/${countries.length}`}</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-gray-600">
                <span className="font-semibold">Country:</span> {country.name.common}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Capital:</span> {country.capital[0]}
              </p>{" "}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
