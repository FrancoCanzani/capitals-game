import React, { useEffect } from "react";
import Icon from "./icon";
import { db } from "../../firebase";
import { doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import signInWithGoogle from "@/utils/signInWithGoogle";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { app } from "../../firebase";
import createPlayerIfNotExists from "@/utils/createPlayerIfNotExists";
import updateMaxStreak from "@/utils/updateMaxStreak";
import Image from "next/image";
import Dropdown from "./dropdown";

export default function Header({ streakCount }: { streakCount: number }) {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);
  const [userData, userDataLoading, userDataError] = useDocument(user ? doc(db, "players", user.uid) : null);

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
    <header className="mb-2 mt-2 flex w-full flex-row items-center justify-between">
      <Icon />
      {loading ? (
        <span className="loading loading-dots loading-xs" aria-label="Streak counter"></span>
      ) : user ? (
        <Dropdown streakCount={streakCount} user={user} userData={userData} />
      ) : (
        <button
          className="flex w-24 flex-row items-center justify-between gap-2 rounded-md bg-slate-100 p-2 font-semibold hover:bg-gray-50"
          onClick={() => signInWithGoogle()}
        >
          <Image src={"/google.png"} alt="Google Logo" height={20} width={15} />
          Sign In
        </button>
      )}
    </header>
  );
}
