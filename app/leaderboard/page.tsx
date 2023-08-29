'use client';

import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { Trophy } from 'lucide-react';
import Image from 'next/image';

export default function Leaderboard() {
  const [data, dataLoading, dataError] = useCollection(
    collection(db, 'players')
  );
  const sortedData = data?.docs
    .slice()
    .sort((a, b) => b.data().maxStreak - a.data().maxStreak);

  return (
    <section className='w-full px-2 md:px-0'>
      <Link
        href={'/'}
        className='flex items-center text-xs gap-1 hover:underline'
      >
        <MoveLeft size={15} /> Back to the game
      </Link>

      <div className='w-full flex py-8 flex-col items-center'>
        <div
          className={`${leagueSpartan.className} text-3xl flex items-center gap-4 lg:text-4xl font-semibold`}
        >
          Capitals{' '}
          <Image
            src={'/world-icon.svg'}
            width={35}
            height={35}
            alt='World icon'
          />
          Leaderboard
        </div>
        {dataLoading ? (
          <span className='mt-8 loading loading-dots loading-md'></span>
        ) : dataError ? (
          <p className='mt-8 bg-red-300 px-3 py-2 text-center'>
            Error: {dataError.message}
          </p>
        ) : (
          <table className='w-full md:w-2/3 overflow-auto mt-8'>
            <thead className='[&_tr]:border-b'>
              <tr className='text-[#64748b]'>
                <th className='h-12 px-4 text-center align-middle font-medium'>
                  Name
                </th>
                <th className='h-12 px-4 text-center align-middle font-medium'>
                  Max Score
                </th>
                <th className='h-12 px-4 text-center align-middle font-medium'>
                  Date
                </th>
              </tr>
            </thead>
            <tbody className='[&_tr:last-child]:border-0'>
              {sortedData?.map((doc, index) => (
                <tr key={doc.id}>
                  <td className='border-b font-semibold text-center truncate p-4 align-middle'>
                    {index === 0 ? (
                      <div className='flex items-center justify-center gap-2'>
                        <Trophy />
                        {doc.data().displayName}{' '}
                      </div>
                    ) : (
                      doc.data().displayName
                    )}
                  </td>

                  <td className='border-b font-semibold truncate text-center p-4 align-middle'>{`${
                    doc.data().maxStreak
                  } capitals`}</td>
                  <td className='border-b italic truncate text-center p-4 align-middle'>
                    {/* Convert the Firestore timestamp to a Date object and format it */}
                    {doc.data().maxStreakTimestamp &&
                      new Date(
                        doc.data().maxStreakTimestamp.seconds * 1000
                      ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
