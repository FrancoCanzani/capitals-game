import ClientProvider from "./components/clientProvider";
import getCountries from "../utils/getCountries";

export default async function Home() {
  const countries = await getCountries();

  return (
    <>
      <ClientProvider countries={countries} />
    </>
  );
}
