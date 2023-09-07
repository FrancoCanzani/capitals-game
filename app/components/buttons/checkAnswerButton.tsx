import React, { useState } from 'react';
import party from 'party-js';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { CheckButtonProps } from '@/utils/types';

export default function CheckAnswerButton({
  userInput,
  setUserInput,
  answer,
  streakCount,
  setStreakCount,
  shake,
  setShake,
  setAlreadyGuessedCapitals,
}: CheckButtonProps) {
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (userInput.toLowerCase() === answer.toLowerCase()) {
      setStreakCount(streakCount + 1);
      setAlreadyGuessedCapitals((prevState) => [...prevState, answer]);
      // Trigger confetti when guess is correct
      party.confetti(e.target as HTMLElement, {
        count: party.variation.range(20, 40),
      });

      setTimeout(() => {
        router.refresh();
        setUserInput('');
      }, 500);
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
    }
  }

  return (
    <button
      onClick={handleSubmit}
      type='submit'
      className={`bg-black w-2/3 text-white rounded-sm px-3 py-3 font-semibold ${
        shake ? 'shake' : '' // Apply the 'shake' class when shaking is true
      }`}
    >
      Check
    </button>
  );
}
