import party from 'party-js';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, FormEvent } from 'react';

interface SubmitButtonProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  answer: string;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  setRevealAnswer: Dispatch<SetStateAction<boolean>>;
}

export default function SubmitButtons({
  userInput,
  setUserInput,
  answer,
  streakCount,
  setStreakCount,
  setRevealAnswer,
}: SubmitButtonProps) {
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (userInput.toLowerCase() === answer.toLowerCase()) {
      // Cast e.target to HTMLElement
      const targetElement = e.target as HTMLElement;
      setStreakCount(streakCount + 1);
      // Trigger confetti with options
      party.confetti(targetElement, {
        count: party.variation.range(20, 40),
      });

      setTimeout(() => {
        router.refresh();
        setUserInput('');
      }, 500);
    }
  }

  function handleSkip() {
    setStreakCount(0);
    setRevealAnswer(true);
    setTimeout(() => {
      setRevealAnswer(false);
      router.refresh();
    }, 1500);
    setUserInput('');
  }

  return (
    <div className='space-x-1 flex items-center'>
      <button
        onClick={handleSubmit}
        type='submit'
        className='bg-black w-2/3 text-white rounded-sm px-3 py-3 font-semibold'
      >
        Check
      </button>
      <button
        onClick={handleSkip}
        type='button'
        className='bg-red-600 w-1/3 text-white rounded-sm px-3 py-3 font-semibold'
      >
        Skip
      </button>
    </div>
  );
}
