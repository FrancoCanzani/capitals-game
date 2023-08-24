import { handleSkipProps } from './types';

export default function handleSkip({
  setInput,
  windowRefresher,
}: handleSkipProps) {
  setInput('');
  windowRefresher;
}
