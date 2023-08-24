import Image from 'next/image';
import { Country } from '@/utils/types';

export default function CountryInformation({ country }: { country: Country }) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={country.flags.svg}
        width={250}
        height={250}
        priority
        alt={`${country.flags.alt}`}
      />
      <p className='text-center mt-4 font-semibold text-xl'>
        {country.name.common}
      </p>
      <p className='text-center mt-4 font-semibold text-xs text-gray-700'>
        {country.name.official}
      </p>
    </div>
  );
}
