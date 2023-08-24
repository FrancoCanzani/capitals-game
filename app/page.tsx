import CountryInformation from './components/countryInformation';
import ClientProvider from './components/clientProvider';

async function getCountries() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,flags'
  );

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  return res.json();
}

export default async function Home() {
  const countries = await getCountries();
  const randomNumber = Math.floor(Math.random() * 250) + 1;
  return (
    <>
      <ClientProvider country={countries[randomNumber]}>
        {/* Server component  */}
        <CountryInformation country={countries[randomNumber]} />
      </ClientProvider>
    </>
  );
}
