import { Country } from "@/utils/types";
import getCountryDifficulty from "@/utils/getCountryDifficulty";

export default function CountryDifficultyIndicator({ country }: { country: Country }) {
  return (
    <div className="my-4 rounded-md overflow-hidden bg-white w-40">
      <span
        className={`
        ${
          getCountryDifficulty(country) === "Easy"
            ? "bg-green-500 w-1/3"
            : getCountryDifficulty(country) === "Medium"
            ? "bg-yellow-500 w-2/3"
            : "bg-red-500 w-full"
        }
        flex font-semibold animate-fade-right animate-duration-[500] animate-ease-in-out py-0.5 text-sm shadow-sm items-center rounded-md justify-center`}
      >
        {getCountryDifficulty(country)}
      </span>
    </div>
  );
}
