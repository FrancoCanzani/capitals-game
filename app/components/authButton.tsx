import { MouseEventHandler } from 'react';
import { LogOut } from 'lucide-react';

export default function AuthButton({
  text,
  onClickFunction,
}: {
  text: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className='capitalize flex items-center justify-between flex-row w-full'>
      <button className='font-semibold' onClick={onClickFunction}>
        {text}
      </button>{' '}
      <LogOut size={18} />
    </div>
  );
}
