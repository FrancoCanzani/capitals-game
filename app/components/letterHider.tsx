export default function LetterHider({
  answer,
  userInput,
  revealAnswer,
}: {
  answer: string;
  userInput: string;
  revealAnswer: boolean;
}) {
  return (
    <div className='pt-6 pb-4 md:pb-3 overflow-x-hidden flex flex-wrap items-center justify-center'>
      {answer &&
        answer
          .toLowerCase()
          .split('')
          .map((letter, index) => (
            <span
              key={index}
              className={`mr-1 mb-1 lg:mb-2 p-1 h-6 w-6 flex items-center justify-center uppercase shadow-sm text-sm font-semibold ${
                letter === userInput.toLowerCase().split('')[index] ||
                revealAnswer === true
                  ? 'revealed' // Apply the revealed class
                  : 'bg-black text-black'
              }`}
            >
              {/* Don't render the letter so the answer can't be inspected in devtools */}
              {letter === userInput.toLowerCase().split('')[index] ||
              revealAnswer === true
                ? letter
                : ''}
            </span>
          ))}
    </div>
  );
}
