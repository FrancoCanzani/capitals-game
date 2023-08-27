import Image from 'next/image';
import { Country } from '@/utils/types';

export default function CountryInformation({ country }: { country: Country }) {
  const currencies = Object.values(country.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(', ');
  const languages = Object.values(country.languages).join(', ');

  return (
    <div className='flex max-h-96 flex-col py-16 items-center animate-fade animate-ease-in-out'>
      <Image
        src={country.flags.svg}
        alt={`${country.flags.alt}`}
        priority
        style={{
          width: '35%',
          height: 'auto',
        }}
        width={200}
        height={200}
      />
      <div className='my-4'>
        <p className='text-center font-semibold text-xl'>
          {country.name.common}
        </p>
        <p className='text-center font-semibold text-xs text-gray-700'>
          {country.name.official}
        </p>
      </div>
      <div className='text-center text-xs text-gray-700 space-y-1'>
        <p>{`Continent: ${country.continents[0]}`}</p>
        <p>{`Currency: ${currencies}`}</p>
        <p>{`Language: ${languages}`}</p>
        <p>{`Population: ${country.population.toLocaleString()}`}</p>
      </div>
    </div>
  );
}
