import { useRouter } from 'next/navigation';
import { SkipButtonProps } from '@/utils/types';
import generateRandomNumber from '@/utils/generateRandomNumber';

export default function SkipButton({
  setUserInput,
  setStreakCount,
  setRevealAnswer,
  setRandomNumber,
}: SkipButtonProps) {
  function handleSkip() {
    setStreakCount(0);
    setRevealAnswer(true);
    setTimeout(() => {
      setRandomNumber(generateRandomNumber());
      setRevealAnswer(false);
    }, 1200);
    setUserInput('');
  }

  const router = useRouter();

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
