'use client';

import { Dispatch, SetStateAction } from 'react';
import RefreshButton from './refreshButton';
import { useState } from 'react';

export default function AnswerInput({
  answer,
  streakCount,
  setStreakCount,
}: {
  answer: string;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
}) {
  const [userInput, setUserInput] = useState<string>('');

  return (
    <form className='flex max-w-2xl flex-col justify-between gap-4'>
      <div className='py-4 max-w-full flex flex-wrap justify-center'>
        {answer &&
          answer
            .toLowerCase()
            .split('')
            .map((letter, index) => (
              <span
                key={index}
                className={`m-4 my-2 max-w-full flex items-center justify-center uppercase  shadow-sm text-xl font-semibold ${
                  letter === userInput.toLowerCase().split('')[index]
                    ? 'px-3 py-1'
                    : 'bg-black text-black w-10 h-10 transform transition-all ease-out duration-150'
                }`}
              >
                {/* Don't render the letter so the answer can't be inspected in devtools */}
                {letter === userInput.toLowerCase().split('')[index]
                  ? letter
                  : '▪️'}
              </span>
            ))}
      </div>

      <label htmlFor='guess' className='font-semibold hidden text-xs mb-1'>
        Your Answer
      </label>
      <input
        type='text'
        name='guess'
        id='guess'
        className='rounded-md p-2'
        placeholder='Answer'
        value={userInput}
        autoComplete='off'
        onChange={(e) => setUserInput(e.target.value)}
      />
      <RefreshButton
        userInput={userInput}
        setUserInput={setUserInput}
        answer={answer}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
      />
    </form>
  );
}
