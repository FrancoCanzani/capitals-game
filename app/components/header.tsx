import React, { useEffect } from 'react';
import StreakCounter from './streakCounter';
import Icon from './icon';
import { db } from '../../firebase';
import { doc } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import signInWithGoogle from '@/utils/signInWithGoogle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { app } from '../../firebase';
import createPlayerIfNotExists from '@/utils/createPlayerIfNotExists';
import updateMaxStreak from '@/utils/updateMaxStreak';
import Link from 'next/link';
import AuthButton from './authButton';
import Image from 'next/image';
import { LogOut, MoveUpRight } from 'lucide-react';

export default function Header({ streakCount }: { streakCount: number }) {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);
  const [userData, userDataLoading, userDataError] = useDocument(
    user ? doc(db, 'players', user.uid) : null
  );

  useEffect(() => {
    if (user && !loading) {
      createPlayerIfNotExists(user);
    }
  }, [user, loading]);

  useEffect(() => {
    if (userData) {
      const currentStreak = streakCount;
      const maxStreak = userData.data()?.maxStreak || 0;

      if (currentStreak > maxStreak) {
        // If current streak is higher, update the maximum streak
        updateMaxStreak(currentStreak, user);
      }
    }
  }, [userData, streakCount, user]);

  return (
    <header className='flex mb-8 md:mb-6 items-center flex-row justify-between w-full'>
      <Icon />
      {user ? (
        <div className='dropdown dropdown-bottom dropdown-end'>
          <label tabIndex={0} className='btn space-x-2 capitalize'>
            <Image
              src={user?.photoURL}
              alt='Profile pic'
              width={22}
              height={22}
              className='rounded-md'
            />
            <span>{user.displayName}</span>
            <span className='bg-white rounded-md px-2 py-1'>{streakCount}</span>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content capitalize font-semibold z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li className='flex flex-row items-center justify-between'>
              <span>Current Streak</span>
              <span>{streakCount}</span>
            </li>
            <li className='flex flex-row items-center justify-between'>
              <span>Max. Streak</span>
              <span>{userData?.data()?.maxStreak}</span>
            </li>
            <li>
              <div className='flex flex-row items-center justify-between'>
                <Link href={'/leaderboard'}>Leaderboard</Link>
                <MoveUpRight size={18} />
              </div>
            </li>
            <li>
              <div className='flex items-center flex-row justify-between w-full'>
                <AuthButton
                  text='Sign out'
                  onClickFunction={() => signOut(auth)}
                />
                <LogOut size={18} />
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <AuthButton text='Sign in' onClickFunction={() => signInWithGoogle()} />
      )}
    </header>
  );
}
