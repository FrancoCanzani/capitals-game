import { MouseEventHandler } from 'react';

export default function AuthButton({
  text,
  onClickFunction,
}: {
  text: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className='text-xs font-semibold' onClick={onClickFunction}>
      {text}
    </button>
  );
}
