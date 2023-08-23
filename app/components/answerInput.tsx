'use client';

import RefreshButton from './refreshButton';
import { useState } from 'react';

export default function AnswerInput({ answer }: { answer: string }) {
  const [userInput, setUserInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  return (
    <form className='flex flex-col justify-between gap-4'>
      <span>{message}</span>
      <div className='w-full h-5 py-6 gap-4 text-center'>
        {answer
          .toLowerCase()
          .split('')
          .map((letter, index) => (
            <span
              key={index}
              className={`mr-4 uppercase p-1 shadow-sm w-8 h-2 text-xl font-semibold ${
                letter === userInput.toLowerCase().split('')[index]
                  ? ''
                  : 'bg-black text-black transform transition-all ease-out duration-150'
              }`}
            >
              {/* Don't render the letter so it the answer can't be inspected in devtools */}
              {letter === userInput.toLowerCase().split('')[index]
                ? letter
                : 'X'}
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
        setMessage={setMessage}
        answer={answer}
      />
    </form>
  );
}
