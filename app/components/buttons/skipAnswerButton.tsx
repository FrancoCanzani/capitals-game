import { SkipButtonProps } from "@/utils/types";
import generateNextCountry from "@/utils/generateNextCountry";

export default function SkipAnswerButton({
  setUserInput,
  setStreakCount,
  setRevealAnswer,
  countries,
  setCountry,
  alreadyGuessedCountries,
}: SkipButtonProps) {
  function handleSkip() {
    setStreakCount(0);
    setRevealAnswer(true);
    setTimeout(() => {
      setCountry(generateNextCountry(countries, alreadyGuessedCountries));
      setRevealAnswer(false);
    }, 1200);
    setUserInput("");
  }

  return (
    <button
      onClick={handleSkip}
      type="button"
      className="bg-red-600 w-1/3 text-white rounded-md px-3 py-3 font-semibold"
    >
      Skip
    </button>
  );
}
