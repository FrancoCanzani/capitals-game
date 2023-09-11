import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-xs absolute bottom-0 dark:bg-slate-800 rounded-b-md sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 p-2 mx-2 bg-slate-700 text-gray-100 w-full flex items-center justify-evenly py-2 mt-4">
      <div className="flex items-center gap-2">
        <Copyright size={15} />
        Copyright 2023{" "}
      </div>

      <Link href={"/termsOfService"} className="underline">
        Terms of service
      </Link>
    </footer>
  );
}
