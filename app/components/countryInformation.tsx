import Image from 'next/image';
import { Country } from '@/utils/types';

export default function CountryInformation({ country }: { country: Country }) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={country.flags.svg}
        priority
        width={200}
        height={200}
        alt={`${country.flags.alt}`}
      />
      <p className='text-center mt-4 font-semibold text-xl'>
        {country.name.common}
      </p>
      <p className='text-center font-semibold text-xs text-gray-700'>
        {country.name.official}
      </p>
    </div>
  );
}
