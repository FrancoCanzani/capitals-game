'use client';

import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, FormEvent } from 'react';

interface SubmitButtonProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  answer: string;
}
export default function RefreshButton({
  userInput,
  setUserInput,
  setMessage,
  answer,
}: SubmitButtonProps) {
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (userInput.toLowerCase() === answer.toLowerCase()) {
      setMessage('Correct');
      setTimeout(() => {
        router.refresh();
        setUserInput('');
        setMessage('');
      }, 1500);
    } else {
      setMessage('Nope');
      setTimeout(() => {
        setMessage('');
      }, 1500);
    }
  }

  function handleSkip() {
    setUserInput('');
    router.refresh();
  }

  return (
    <div className=' space-x-1 flex items-center'>
      <button
        onClick={handleSubmit}
        type='submit'
        className='bg-black w-2/3 text-white rounded-md px-3 py-3 font-semibold'
      >
        Check
      </button>
      <button
        onClick={handleSkip}
        type='button'
        className='bg-red-600 w-1/3 text-white rounded-md px-3 py-3 font-semibold'
      >
        Skip
      </button>
    </div>
  );
}
