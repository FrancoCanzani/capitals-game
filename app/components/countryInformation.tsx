'use client';

import Image from 'next/image';
import { Country } from '@/utils/types';

export default function CountryInformation({ country }: { country: Country }) {
  const currencies = Object.values(country.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(', ');
  const languages = Object.values(country.languages).join(', ');

  return (
    <div className='flex flex-col py-8 md:py-6 items-center animate-fade animate-ease-in-out'>
      <div className='h-44 w-72 relative shadow-2xl shadow-amber-50'>
        <Image
          src={country.flags.svg ?? country.flags.png}
          alt={`${country.flags.alt}`}
          priority
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-md bg-cover'
        />
      </div>
      <div className='mt-12 md:mt-10 mb-5'>
        <p className='text-center font-semibold text-xl'>
          {country.name.common}
        </p>
        <p className='text-center font-semibold text-xs text-gray-700'>
          {country.name.official}
        </p>
      </div>
      <div className='text-center text-xs text-gray-700 space-y-1'>
        <p>
          <span className='font-semibold'>Continent:</span>{' '}
          {country.continents[0]}
        </p>
        <p className='capitalize'>
          <span className='font-semibold'>Currency:</span> {currencies}
        </p>
        <p>
          <span className='font-semibold'>Language:</span> {languages}
        </p>
        <p>
          <span className='font-semibold'>Population:</span>{' '}
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
