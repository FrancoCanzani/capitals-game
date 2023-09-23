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
    <div className="min-h-12 z-10 flex items-center justify-start rounded-md bg-slate-100 px-2 py-1 text-sm dark:text-black">
      <span className="mr-1 font-semibold">Capital:</span>
      {answer &&
        answer
          .toLowerCase()
          .split("")
          .map((letter, index) => (
            <span
              key={index}
              className={`flex max-w-full basis-auto items-center justify-center rounded-sm font-semibold capitalize ${
                letter === userInput.toLowerCase().split("")[index] || revealAnswer === true || letter === " "
                  ? "revealed mr-1 px-1" // Apply the revealed class
                  : "mr-1 bg-slate-300 px-1.5 text-slate-400"
              }`}
            >
              {/* Don't render the letter so the answer can't be inspected in devtools */}
              {letter === userInput.toLowerCase().split("")[index] || revealAnswer === true || letter === " "
                ? letter
                : "?"}
            </span>
          ))}
    </div>
  );
}
