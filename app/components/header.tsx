import React, { useEffect } from 'react';
import Icon from './icon';
import { db } from '../../firebase';
import { doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import signInWithGoogle from '@/utils/signInWithGoogle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { app } from '../../firebase';
import createPlayerIfNotExists from '@/utils/createPlayerIfNotExists';
import updateMaxStreak from '@/utils/updateMaxStreak';
import Image from 'next/image';
import Dropdown from './dropdown';
import { Toaster, toast } from 'sonner';

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
      <Toaster />
      <Icon />
      {loading ? (
        <span className='loading loading-dots loading-md'></span>
      ) : user ? (
        <Dropdown streakCount={streakCount} user={user} userData={userData} />
      ) : (
        <button
          className='flex items-center font-semibold border rounded-md px-3 py-1 flex-row justify-between w-28'
          onClick={() => signInWithGoogle()}
        >
          <Image src={'/google.png'} alt='Google Logo' height={15} width={15} />
          Sign In
        </button>
      )}
    </header>
  );
}
