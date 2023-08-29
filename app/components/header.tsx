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
import { Trophy } from 'lucide-react';
import AuthButton from './authButton';

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
      <div>
        <p className='text-xs font-semibold capitalize'>
          Current streak:{' '}
          <span className='px-1 font-semibold'>{streakCount}</span>
        </p>
        <p className='text-xs font-semibold capitalize'>
          Best streak:{' '}
          <span className='px-1 font-semibold'>
            {userData?.data()?.maxStreak}
          </span>
        </p>
      </div>
      {userDataLoading ? (
        <span className='loading loading-dots loading-md'></span>
      ) : userDataError ? (
        <p className='mt-8 bg-red-300 px-3 py-2 text-center'>
          Error: {userDataError.message}
        </p>
      ) : user ? (
        <AuthButton text='Sign out' onClickFunction={() => signOut(auth)} />
      ) : (
        <AuthButton text='Sign in' onClickFunction={() => signInWithGoogle()} />
      )}

      <Link href={'/leaderboard'}>
        <Trophy />
      </Link>
    </header>
  );
}
