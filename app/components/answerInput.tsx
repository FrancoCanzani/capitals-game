'use client';

import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import LetterHider from './letterHider';
import CheckAnswerButton from './buttons/checkAnswerButton';
import SkipButton from './buttons/skipButton';

export default function AnswerInput({
  answer,
  streakCount,
  setStreakCount,
  setAlreadyGuessedCapitals,
}: {
  answer: string;
  streakCount: number;
  setStreakCount: Dispatch<SetStateAction<number>>;
  setAlreadyGuessedCapitals: Dispatch<SetStateAction<Array<string>>>;
}) {
  const [userInput, setUserInput] = useState<string>('');
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [shake, setShake] = useState(false); // State variable for shaking effect

  return (
    <form className='flex pt-4 pb-6 xs:pb-8 w-full flex-col justify-between gap-1'>
      <LetterHider
        answer={answer}
        userInput={userInput}
        revealAnswer={revealAnswer}
      />
      <label htmlFor='guess' className='font-semibold hidden text-xs mb-1'>
        Your Answer
      </label>
      <input
        type='text'
        name='guess'
        spellCheck='false'
        autoFocus
        id='guess'
        className={`rounded-sm p-2 mb-2 border-2 ${
          shake ? 'border-red-500' : 'border-gray-100'
        }`}
        placeholder='Answer'
        value={userInput}
        autoComplete='off'
        onChange={(e) => setUserInput(e.target.value)}
      />

      <div className='space-x-1 flex items-center'>
        <CheckAnswerButton
          userInput={userInput}
          setUserInput={setUserInput}
          answer={answer}
          setStreakCount={setStreakCount}
          streakCount={streakCount}
          shake={shake}
          setShake={setShake}
          setAlreadyGuessedCapitals={setAlreadyGuessedCapitals}
        />
        <SkipButton
          userInput={userInput}
          setUserInput={setUserInput}
          answer={answer}
          setStreakCount={setStreakCount}
          streakCount={streakCount}
          setRevealAnswer={setRevealAnswer}
        />
      </div>
    </form>
  );
}
