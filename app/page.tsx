import ClientProvider from './components/clientProvider';
import Faq from './components/faq/faq';
import getCountries from '../utils/getCountries';

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className='flex flex-col items-center px-2 md:px-0'>
      <ClientProvider countries={countries} />
      <Faq />
    </main>
  );
}
