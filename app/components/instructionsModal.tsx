import Link from "next/link";
import { League_Spartan } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });
import Image from "next/image";
import signInWithGoogle from "@/utils/signInWithGoogle";
import { User } from "firebase/auth";
export default function InstructionsModal({
  openPopup,
  setOpenPopup,
  user,
}: {
  openPopup: boolean;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  user: User | null | undefined;
}) {
  return (
    <div
      className={`animate-fade animate-ease-in-out animate-duration-200 absolute left-1/2 top-1/2 z-50 min-w-[80%] max-w-xl -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white px-5 pb-6 pt-2 text-sm shadow-2xl sm:min-w-0 ${
        openPopup ? "block" : "hidden"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold capitalize">How to Play</h2>
        <button className="p-1 text-sm font-bold" onClick={() => setOpenPopup(!openPopup)}>
          X
        </button>
      </div>
      <p>
        Welcome to <span className={`${leagueSpartan.className} text-lg font-semibold`}>Capitals</span>! Follow these
        simple steps to enjoy and compete on the{" "}
        <Link href="/leaderboard" target="blank" className="text-blue-500 underline hover:opacity-80">
          Leaderboard
        </Link>
        :
      </p>
      <ol className="list-decimal py-2 pl-6">
        <li>Pay attention to the provided country information.</li>
        <li>Guess the capital of the country based on the information given.</li>
        <li>If you guess correctly, your streak count will increase.</li>
        <li>Keep guessing the capitals and try to achieve the highest streak possible.</li>
      </ol>
      <p>The answers are not case-sensitive, but you must include spaces and accents correctly.</p>
      <h3 className="mb-1 pt-2 font-semibold">Example</h3>
      <div className="pb-2">
        <div className="mb-2 space-x-1">
          <span className="rounded-sm bg-red-400 px-1 py-0.5 font-medium line-through">Bogota</span>{" "}
          <span className="rounded-sm bg-green-400 px-1 py-0.5 font-medium">Bogotá</span>
        </div>
        <div className="space-x-1">
          <span className="rounded-sm bg-red-400 px-1 py-0.5 font-medium line-through">BunosAires</span>{" "}
          <span className="rounded-sm bg-green-400 px-1 py-0.5 font-medium">Bunos Aires</span>
        </div>
      </div>
      <p>Good luck, and let&apos;s see who can achieve the longest streak and reach the leaderboard&apos;s pinnacle!</p>

      {!user && (
        <div className="my-2 border-b border-t py-2">
          <button
            className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-slate-100 p-2 font-semibold hover:bg-gray-50"
            onClick={() => signInWithGoogle()}
          >
            <Image src={"/google.png"} alt="Google Logo" height={20} width={15} />
            Sign In To Track Your Progress
          </button>
        </div>
      )}
    </div>
  );
}
