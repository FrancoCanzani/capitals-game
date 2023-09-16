import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Icon() {
  return (
    <div className="flex items-center space-x-2">
      <h1 className={`${leagueSpartan.className} text-3xl font-semibold dark:text-gray-100`}>Capitals</h1>
    </div>
  );
}
