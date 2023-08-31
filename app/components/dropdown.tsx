import Image from 'next/image';
import Link from 'next/link';
import { LogOut, MoveUpRight } from 'lucide-react';
import { User, getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { DocumentSnapshot, DocumentData } from 'firebase/firestore';

export default function Dropdown({
  user,
  streakCount,
  userData,
}: {
  user: User | null;
  streakCount: number;
  userData: DocumentSnapshot<DocumentData, DocumentData> | undefined;
}) {
  const auth = getAuth(app);

  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <label
        tabIndex={0}
        className='btn border-none bg-inherit hover:bg-slate-50 rounded-md space-x-2 capitalize'
      >
        <Image
          src={user?.photoURL ?? '/profilePicPlaceholder.png'}
          alt='Profile pic'
          width={25}
          height={25}
          className='rounded-md'
        />
        <span>{user?.displayName}</span>
        <span className='bg-gray-50 rounded-md px-2 py-1'>{streakCount}</span>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content rounded-md capitalize  font-semibold z-[1] menu p-2 shadow bg-base-100 w-52'
      >
        <li>
          <div className='flex flex-row w-full rounded-md hover:bg-gray-50 items-center justify-between'>
            <span>Current Streak</span>
            <span className='bg-gray-50 rounded-md px-2 py-1'>
              {streakCount}
            </span>
          </div>
        </li>
        <li>
          <div className='flex flex-row items-center w-full rounded-md hover:bg-gray-50 justify-between'>
            <span>Max. Streak</span>
            <span className='bg-gray-50 rounded-md px-2 py-1'>
              {userData?.data()?.maxStreak}
            </span>
          </div>
        </li>
        <li className='border-b'>
          <div className='flex mb-1 hover:bg-gray-50 flex-row items-center justify-between'>
            <Link
              href={'/leaderboard'}
              className='flex items-center justify-between w-full'
            >
              Leaderboard <MoveUpRight size={18} />
            </Link>
          </div>
        </li>
        <li className='mt-1'>
          <div className='flex items-center hover:bg-red-100 flex-row justify-between w-full'>
            <button onClick={() => signOut(auth)}>Sign Out</button>
            <LogOut size={18} />
          </div>
        </li>
      </ul>
    </div>
  );
}
