import ClientProvider from "./components/clientProvider";
import getCountries from "../utils/getCountries";
import { Toaster } from "sonner";

export default async function Home() {
  const countries = await getCountries();

  return (
    <>
      <Toaster theme="system" />
      <ClientProvider countries={countries} />;
    </>
  );
}
