import Image from 'next/image';
import { Country } from '@/utils/types';

export default function CountryInformation({ country }: { country: Country }) {
  const currencies = Object.values(country.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(', ');
  const languages = Object.values(country.languages).join(', ');

  return (
    <div className='flex flex-col py-8 items-center animate-fade animate-ease-in-out'>
      <div className='h-44 w-72 relative shadow-2xl shadow-amber-50'>
        <Image
          src={country.flags.svg ?? country.flags.png}
          alt={`${country.flags.alt}`}
          priority
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='mt-10 mb-4'>
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
        <p>
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
