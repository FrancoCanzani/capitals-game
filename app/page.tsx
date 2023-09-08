import ClientProvider from './components/clientProvider';
import Faq from './components/faq/faq';
import { Country } from '@/utils/types';

async function getCountries() {
  // As new countries are generated by refreshing the page, we need to opt ut caching so new data is fetched
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies,continents,languages,population',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const countries = await res.json();

  // Filter out countries without a capital like Antarctica
  const countriesWithCapital = countries.filter(
    (country: Country) => country.capital[0] && country.capital[0].length > 0
  );

  return countriesWithCapital;
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className='flex flex-col items-center px-2 md:px-0'>
      <ClientProvider countries={countries} />
      <Faq />
    </main>
  );
}
