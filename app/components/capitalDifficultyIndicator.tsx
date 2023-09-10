import { Country } from "@/utils/types";
import getCountryDifficulty from "@/utils/getCountryDifficulty";

export default function CountryDifficultyIndicator({ country }: { country: Country }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className={`
    ${
      getCountryDifficulty(country) === "Easy"
        ? "bg-green-500"
        : getCountryDifficulty(country) === "Medium"
        ? "bg-yellow-500"
        : "bg-red-500"
    }
    h-3 w-3 rounded-full flex items-center justify-center`}
      >
        <span className="text-white"></span>
      </div>
      <p className="font-semibold">{getCountryDifficulty(country)}</p>
    </div>
  );
}
