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
    <main className='flex relative min-h-screen flex-col items-center justify-evenly px-4 md:px-24 pt-10 md:pb-16 md:py-12'>
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
