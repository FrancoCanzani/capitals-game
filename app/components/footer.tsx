import { Copyright } from 'lucide-react';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });
import { League_Spartan } from 'next/font/google';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-xs w-full flex items-center justify-evenly py-2 mt-2'>
      <div className='flex items-center gap-2'>
        <Copyright size={15} />
        Copyright 2023{' '}
        <span className={`${leagueSpartan.className} font-semibold`}>
          Capitals
        </span>
      </div>

      <Link href={'/termsOfService'} className='underline'>
        Terms of service
      </Link>
    </footer>
  );
}
