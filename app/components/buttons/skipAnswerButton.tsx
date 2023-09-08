import { SkipButtonProps } from '@/utils/types';
import generateRandomCountry from '@/utils/generateRandomCountry';

export default function SkipAnswerButton({
  setUserInput,
  setStreakCount,
  setRevealAnswer,
  countries,
  setCountry,
  alreadyGuessedCapitals,
}: SkipButtonProps) {
  function handleSkip() {
    setStreakCount(0);
    setRevealAnswer(true);
    setTimeout(() => {
      setCountry(generateRandomCountry(countries, alreadyGuessedCapitals));
      setRevealAnswer(false);
    }, 1200);
    setUserInput('');
  }

  return (
    <button
      onClick={handleSkip}
      type='button'
      className='bg-red-600 w-1/3 text-white rounded-sm px-3 py-3 font-semibold'
    >
      Skip
    </button>
  );
}
