'use client';

import RefreshButton from './refreshButton';
import { useState } from 'react';

export default function AnswerInput({ answer }: { answer: string }) {
  const [userInput, setUserInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  return (
    <form className='flex flex-col justify-between gap-4'>
      <span>{message}</span>
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
