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
    <div className="dropdown hover:bg-gray-50 dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn border-none shadow-xs bg-white rounded-md space-x-2 capitalize">
        <Image
          src={user?.photoURL ?? "/profilePicPlaceholder.png"}
          alt="Profile pic"
          width={28}
          height={28}
          className="rounded-full"
        />
        <div className="bg-gray-50 p-2 space-x-2 rounded-md font-semibold">
          <span>Streak:</span>
          <span className="bg-white rounded-md px-2 py-0.5">{streakCount}</span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content rounded-md capitalize  font-semibold z-[1] menu p-2 shadow bg-base-100 w-52"
      >
        <li>
          <div className="flex flex-row w-full rounded-md hover:bg-gray-50 items-center justify-between">
            <span>Current Streak</span>
            <span className="bg-gray-50 rounded-md px-2 py-1">{streakCount}</span>
          </div>
        </li>
        <li>
          <div className="flex flex-row items-center w-full rounded-md hover:bg-gray-50 justify-between">
            <span>Max. Streak</span>
            <span className="bg-gray-50 rounded-md px-2 py-1">{userData?.data()?.maxStreak}</span>
          </div>
        </li>
        <li className="border-b">
          <div className="flex mb-1 hover:bg-gray-50 flex-row items-center justify-between">
            <Link href={"/leaderboard"} target="blank" className="flex items-center justify-between w-full">
              Leaderboard <MoveUpRight size={18} />
            </Link>
          </div>
        </li>
        <li className="mt-1">
          <button
            className="flex items-center hover:bg-red-100 flex-row justify-between w-full"
            onClick={() => signOut(auth)}
          >
            Sign Out <LogOut size={18} />
          </button>
        </li>
      </ul>
    </div>
  );
}
