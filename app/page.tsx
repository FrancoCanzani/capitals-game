import ClientProvider from "./components/clientProvider";
import Faq from "./components/faq/faq";
import getCountries from "../utils/getCountries";

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="pt-3 mx-4 rounded-md bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] flex flex-col items-center px-2 md:px-0">
      <ClientProvider countries={countries} />
      <Faq />
    </main>
  );
}
