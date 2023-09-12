import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <section className="mx-3 w-full px-3 py-2 sm:w-3/4 md:w-2/3 lg:w-1/2">
      <Link href={"/"} className="flex items-center gap-1 text-xs hover:underline">
        <MoveLeft size={15} /> Back to the game
      </Link>
      <div className="p-8">
        <h1 className="mb-4 text-2xl font-bold">Terms of Service</h1>
        <p className="mb-2">Welcome to the Capitals Game!</p>

        <p className="mb-2">
          These terms of service (&quot;Terms&quot;) govern your use of the game. By accessing or using the game, you
          agree to be bound by these Terms. If you do not agree to these Terms, please do not use the game.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">User Accounts</h2>
        <p className="mb-2">
          To use certain features of the game, you may be required to create a user account. You are responsible for
          maintaining the confidentiality of your account information, including your username and password. You agree
          to notify us immediately of any unauthorized use of your account.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">User Conduct</h2>
        <p className="mb-2">
          You agree to use the game in accordance with all applicable laws and regulations. You also agree not to:
        </p>
        <ul className="ml-8 list-disc">
          <li>Violate these Terms;</li>
          <li>Use the game for any illegal or unauthorized purpose;</li>
          <li>Interfere with or disrupt the game or servers;</li>
          <li>Attempt to gain unauthorized access to the game;</li>
          <li>Engage in any form of harassment, hate speech, or harmful conduct;</li>
        </ul>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Disclaimer</h2>
        <p className="mb-2">
          The game is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee the
          accuracy or availability of the content within the game.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Changes to Terms</h2>
        <p className="mb-2">
          We may update these Terms from time to time. Any changes will be effective immediately upon posting the
          revised Terms. Your continued use of the game after the posting of the revised Terms constitutes your
          agreement to abide by them.
        </p>

        <p className="mt-4 text-sm text-gray-600">Last updated: 29-08-2023</p>
      </div>
    </section>
  );
}
