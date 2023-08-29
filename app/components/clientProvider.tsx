'use client';

import AnswerInput from './answerInput';
import Header from './header';
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
    <>
      <Header streakCount={streakCount} />
      {children}
      <AnswerInput
        answer={country.capital[0]}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
      />
    </>
  );
}
