import party from "party-js";
import { FormEvent } from "react";
import { CheckButtonProps } from "@/utils/types";

export default function CheckAnswerButton({
  userInput,
  setUserInput,
  answer,
  streakCount,
  setStreakCount,
  shake,
  setShake,
  country,
  setAlreadyGuessedCountries,
}: CheckButtonProps) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (userInput.toLowerCase() === answer?.toLowerCase()) {
      // Trigger confetti
      party.confetti(e.target as HTMLElement, {
        count: party.variation.range(20, 40),
      });

      setTimeout(() => {
        setStreakCount(streakCount + 1);
        // Setting a new guessed capital will trigger a new country as it is inside the dependency array of the set country useEffect
        setAlreadyGuessedCountries((prevState) => {
          if (country) {
            // Add 'country' to the array only if it's not null
            return [country, ...prevState];
          }
          // Return the previous state if 'country' is null
          return prevState;
        });
        setUserInput("");
      }, 500);
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
    }
  }

  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className={`w-2/3 rounded-md bg-black px-3 py-3 font-semibold text-white ${
        shake ? "shake" : "" // Apply the 'shake' class when guess is incorrect or empty
      }`}
    >
      Check
    </button>
  );
}
