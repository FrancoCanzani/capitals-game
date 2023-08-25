import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Icon() {
  return (
    <div className='flex items-center space-x-2'>
      <h1
        className={`${leagueSpartan.className} text-2xl lg:text-3xl font-semibold`}
      >
        Capitals
      </h1>
      <Image src={'/world-icon.svg'} width={35} height={35} alt='World icon' />
    </div>
  );
}
