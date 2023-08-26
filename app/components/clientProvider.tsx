'use client';

import AnswerInput from './answerInput';
import StreakCounter from './streakCounter';
import Icon from './icon';
import { Country } from '@/utils/types';
import { useState } from 'react';

export default function ClientProvider({
  children,
  country,
}: {
  children: React.ReactNode;
  country: Country;
}) {
  const [streakCount, setStreakCount] = useState(0);

  return (
    <main className='flex antialiased max-w-2xl min-h-screen flex-col items-center justify-center xl:justify-evenly mx-4 mt-8 lg:mx-auto'>
      <header className='flex fixed pt-4 mb-2 top-0 items-center flex-row justify-evenly w-full'>
        <Icon />
        <StreakCounter streakCount={streakCount} />
      </header>
      {children}
      <AnswerInput
        answer={country.capital[0]}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
      />
    </main>
  );
}
