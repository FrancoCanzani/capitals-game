import Image from 'next/image';
import AnswerInput from './components/answerInput';

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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center'>
        <Image
          src={countries[randomNumber].flags.svg}
          width={250}
          height={250}
          priority
          alt={`${countries[randomNumber].flags.alt}`}
        />
        <p className='text-center mt-4 font-semibold text-xl'>
          {countries[randomNumber].name.common}
        </p>
        <p className='text-center mt-4 font-semibold text-xs text-gray-700'>
          {countries[randomNumber].name.official}
        </p>
      </div>

      <AnswerInput answer={countries[randomNumber].capital[0]} />
    </main>
  );
}
