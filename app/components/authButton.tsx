import { MouseEventHandler } from 'react';

export default function AuthButton({
  text,
  onClickFunction,
}: {
  text: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className='font-semibold' onClick={onClickFunction}>
      {text}
    </button>
  );
}
