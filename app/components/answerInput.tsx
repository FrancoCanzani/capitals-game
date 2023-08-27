'use client';

import { Dispatch, SetStateAction } from 'react';
import RefreshButton from './refreshButton';
import { useState } from 'react';
import LetterHider from './letterHider';

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
    <form className='flex pt-4 pb-6 max-w-2xl flex-col justify-between gap-1'>
      <LetterHider answer={answer} userInput={userInput} />
      <label htmlFor='guess' className='font-semibold hidden text-xs mb-1'>
        Your Answer
      </label>
      <input
        type='text'
        name='guess'
        id='guess'
        className='rounded-sm p-2 mb-2 border-2 border-gray-100'
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
