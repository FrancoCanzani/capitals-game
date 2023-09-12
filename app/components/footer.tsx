import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 mx-2 mt-4 flex w-full items-center justify-evenly rounded-b-md bg-slate-700 p-2 py-2 text-xs text-gray-100 dark:bg-slate-800 sm:w-3/4 md:w-2/3 lg:w-1/2 ">
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
