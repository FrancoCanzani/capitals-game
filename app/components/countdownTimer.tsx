import { useEffect, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

export default function CountdownTimer({
  timerSeconds,
  setTimerSeconds,
  setStreakCount,
  setRevealAnswer,
  setUserInput,
}: {
  timerSeconds: number;
  setTimerSeconds: Dispatch<SetStateAction<number>>;
  setStreakCount: Dispatch<SetStateAction<number>>;
  setRevealAnswer: Dispatch<SetStateAction<boolean>>;
  setUserInput: Dispatch<SetStateAction<string>>;
}) {
  const router = useRouter();

  function handleSkip() {
    setStreakCount(0);
    setRevealAnswer(true);
    setTimeout(() => {
      setRevealAnswer(false);
      router.refresh();
      setTimerSeconds(25);
    }, 1200);
    setUserInput('');
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        setTimerSeconds((prevSeconds) => prevSeconds - 1);
      } else if (timerSeconds == 0) {
        handleSkip();
      }
    }, 1000);

    return () => clearInterval(timerInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerSeconds]);

  return (
    <div>
      <h1>
        Countdown Timer:{' '}
        <span className={`${timerSeconds <= 5 && 'text-red-500'}`}>
          {timerSeconds}
        </span>
      </h1>
    </div>
  );
}
