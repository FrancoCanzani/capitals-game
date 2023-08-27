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
    <section className=''>
      <header className='flex mb-6 md:mb-3 items-center flex-row justify-between w-full'>
        <Icon />
        <StreakCounter streakCount={streakCount} />
      </header>
      {children}
      <AnswerInput
        answer={country.capital[0]}
        setStreakCount={setStreakCount}
        streakCount={streakCount}
      />
    </section>
  );
}
