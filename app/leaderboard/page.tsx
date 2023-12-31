"use client";

import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Trophy } from "lucide-react";
import Image from "next/image";

export default function Leaderboard() {
  const [data, dataLoading, dataError] = useCollection(collection(db, "players"));
  const sortedData = data?.docs.slice().sort((a, b) => b.data().maxStreak - a.data().maxStreak);

  return (
    <section className="mx-3 w-full px-3 py-2 sm:w-3/4 md:w-2/3 lg:w-1/2 ">
      <Link href={"/"} className="flex items-center gap-1 text-xs hover:underline">
        <MoveLeft size={15} /> Back to the game
      </Link>

      <div className="flex w-full flex-col items-center py-8">
        <div className={`${leagueSpartan.className} flex items-center gap-4 text-3xl font-semibold lg:text-4xl`}>
          Capitals <Image src={"/world-icon.svg"} width={35} height={35} alt="World icon" />
          Leaderboard
        </div>
        {dataLoading ? (
          <span className="loading loading-dots loading-xs mt-8"></span>
        ) : dataError ? (
          <p className="mt-8 bg-red-300 px-3 py-2 text-center">Error: {dataError.message}</p>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Score</th>
                  <th className="hidden sm:block">Date</th>
                </tr>
              </thead>
              <tbody>
                {sortedData?.map((doc, index) => (
                  <tr className={`${index == 0 && "bg-stone-100"}`} key={doc.id}>
                    <td className="flex items-center justify-center">
                      {index == 0 ? <Trophy size={18} /> : index + 1}
                    </td>
                    <td>{doc.data().displayName}</td>
                    <td>{`${doc.data().maxStreak} capitals`}</td>
                    <td className="hidden sm:block">
                      {/* Convert the Firestore timestamp to a Date object and format it */}
                      {doc.data().maxStreakTimestamp &&
                        new Date(doc.data().maxStreakTimestamp.seconds * 1000).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
