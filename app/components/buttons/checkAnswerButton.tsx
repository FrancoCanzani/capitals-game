import party from 'party-js';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { CheckButtonProps } from '@/utils/types';

export default function CheckAnswerButton({
  userInput,
  setUserInput,
  answer,
  streakCount,
  setStreakCount,
}: CheckButtonProps) {
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

  return (
    <button
      onClick={handleSubmit}
      type='submit'
      className='bg-black w-2/3 text-white rounded-sm px-3 py-3 font-semibold'
    >
      Check
    </button>
  );
}
