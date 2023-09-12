import Image from "next/image";
import Link from "next/link";
import { LogOut, MoveUpRight } from "lucide-react";
import { User, getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";

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
    <div className="dropdown dropdown-bottom dropdown-end mr-2">
      <label tabIndex={0} className="indicator cursor-pointer">
        <span className="indicator-item badge badge-secondary rounded-full border-none bg-slate-700 px-2 py-3 font-semibold text-gray-100">
          {streakCount}
        </span>
        <Image
          src={user?.photoURL ?? "/profilePicPlaceholder.png"}
          alt="Profile pic"
          width={35}
          height={35}
          className="rounded-full"
        />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu z-[1] w-52 rounded-md bg-slate-100 p-1 font-semibold capitalize shadow"
      >
        <li>
          <div className="flex w-full flex-row items-center justify-between rounded-md hover:bg-gray-50">
            <span>Current Streak</span>
            <span className="rounded-md bg-gray-50 px-2 py-1">{streakCount}</span>
          </div>
        </li>
        <li>
          <div className="flex w-full flex-row items-center justify-between rounded-md hover:bg-gray-50">
            <span>Max. Streak</span>
            <span className="rounded-md bg-gray-50 px-2 py-1">{userData?.data()?.maxStreak}</span>
          </div>
        </li>
        <li className="border-b">
          <div className="mb-1 flex flex-row items-center justify-between hover:bg-gray-50">
            <Link href={"/leaderboard"} target="blank" className="flex w-full items-center justify-between">
              Leaderboard <MoveUpRight size={18} />
            </Link>
          </div>
        </li>
        <li className="mt-1">
          <button
            className="flex w-full flex-row items-center justify-between hover:bg-red-200"
            onClick={() => signOut(auth)}
          >
            Sign Out <LogOut size={18} />
          </button>
        </li>
      </ul>
    </div>
  );
}
