export default function LetterHider({
  answer,
  userInput,
  revealAnswer,
}: {
  answer: string | null;
  userInput: string;
  revealAnswer: boolean;
}) {
  return (
    <fieldset className="z-50 flex flex-wrap items-center justify-center rounded-md bg-slate-100 px-2 py-1 text-sm dark:text-black">
      <legend className="font-semibold mix-blend-difference dark:text-white">Capital:</legend>
      {answer &&
        answer
          .toLowerCase()
          .split("")
          .map((letter, index) => (
            <span
              key={index}
              className={`mb-1 mr-1 flex h-5 w-5 max-w-full basis-auto items-center justify-center rounded-sm font-semibold uppercase ${
                letter === userInput.toLowerCase().split("")[index] || revealAnswer === true || letter == " "
                  ? "revealed" // Apply the revealed class
                  : "bg-slate-300"
              }`}
            >
              {/* Don't render the letter so the answer can't be inspected in devtools */}
              {letter === userInput.toLowerCase().split("")[index] || revealAnswer === true ? letter : ""}
            </span>
          ))}
    </fieldset>
  );
}
