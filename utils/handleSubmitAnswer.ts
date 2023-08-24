import party from 'party-js';
import { handleSubmitAnswerProps } from './types';

export default function handleSubmitAnswer({
  event,
  input,
  setInput,
  capital,
  windowRefresher,
}: handleSubmitAnswerProps) {
  event.preventDefault();

  if (input.toLowerCase() === capital.toLowerCase()) {
    // Cast e.target to HTMLElement
    const targetElement = event.target as HTMLElement;
    party.confetti(targetElement, {
      count: party.variation.range(20, 40),
    });

    setTimeout(() => {
      windowRefresher;
      setInput('');
    }, 500);
  } else {
    setTimeout(() => {}, 1500);
  }
}
