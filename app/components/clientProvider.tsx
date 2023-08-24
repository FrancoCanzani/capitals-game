'use client';

import AnswerInput from './answerInput';
import StreakCounter from './streakCounter';
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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <StreakCounter streakCount={streakCount} />
      {children}
      <AnswerInput
        answer={country.capital[0]}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
      />
    </main>
  );
}
