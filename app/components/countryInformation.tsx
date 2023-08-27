import Image from 'next/image';
import { Country } from '@/utils/types';

export default function CountryInformation({ country }: { country: Country }) {
  const currencies = Object.values(country.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(', ');
  const languages = Object.values(country.languages).join(', ');

  return (
    <div className='flex h-96 flex-col py-14 items-center animate-fade animate-ease-in-out'>
      <Image
        src={country.flags.svg}
        priority
        width={250}
        height={250}
        alt={`${country.flags.alt}`}
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
        <p>{`Currencies: ${currencies}`}</p>
        <p>{`Languages: ${languages}`}</p>
        <p>{`Population: ${country.population.toLocaleString()}`}</p>
      </div>
    </div>
  );
}
